import { ethers } from "ethers";
import { useState, useEffect } from "react";

//ABIs
import Level1Completion from "../../build/Level1Completion.json";
import RelayHub from "../../build/RelayHub.json";

//GSN provider

import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";

//Address

import level1CompletionDeployed from "../../deployedContractAddresses/Level1Completion.json";

import whitelistDeployed from "../../deployedContractAddresses/WhitelistPaymaster.json";

import relayHubDeployed from "../../rinkebyAddresses/RelayHub.json";

import Loading from "../Loading";
const HttpProvider = require("web3-providers-http");

const MintNFT = ({ metaData }) => {
  const [relayProvider, setRelayProvider] = useState("");
  const [oneTimeAccount, setOneTimeAccount] = useState();

  //txn results
  const [proofOfTxn, setProofOfTxn] = useState();
  const [userSubmittedAddress, setUserSubmittedAddress] = useState("");
  const [poapTokenID, setPAOPTokenID] = useState(0);

  //notifications
  const [loading, setLoading] = useState(false);
  const [relayMessage, setRelayMessage] = useState("");

  //contract Objects
  const [
    Level1CompletionContractEphemeral,
    setLevel1CompletionContractEphemeral,
  ] = useState();

  //error msg
  const [errorMessage, setErrorMessage] = useState("");

  //http provider
  const [localHttpProvider, setLocalHttpProvider] = useState("");

  //set provider and WhiteListPaymaster addresss

  useEffect(() => {
    initContract()
      .then((result) => console.log(result, "init result"))
      .catch((error) => console.log(error, "init error"));

    async function initContract() {
      // all addresses in rinkebyAddresses are contracts already deployed by OpenGSN. Just the addresses are needed.
      // Whitelist Paymaster and Level1 are the contracts that will be deployed by us.

      const gsnConfig = {
        relayLookupWindowBlocks: 1e5,
        relayRegistrationLookupBlocks: 1e5,
        pastEventsQueryMaxPageSize: 2e4,
        paymasterAddress: whitelistDeployed.address,
        gasPrice: 0,
      };

      let httpweb3provider = new HttpProvider(
        "https://eth-rinkeby.alchemyapi.io/v2/lUClO9NkAFshlkgvnVQD0IwrkYIRCHU_"
      );
      setLocalHttpProvider(httpweb3provider);

      const gsnProvider = await RelayProvider.newProvider({
        provider: httpweb3provider,
        config: gsnConfig,
      }).init();

      const relayedProvider = new ethers.providers.Web3Provider(gsnProvider);
      setRelayProvider(relayedProvider);

      //create one time account
      const uniqueOneTimeAccount = gsnProvider.newAccount();
      setOneTimeAccount(uniqueOneTimeAccount);
    }
  }, []);

  //create Contract Instances

  useEffect(() => {
    if (relayProvider && oneTimeAccount) {
      createContractObjects();
    }

    async function createContractObjects() {
      //create new instance of relayHub for owner use with regular signer. *NOT* one time signer

      const regularProvider = new ethers.providers.AlchemyProvider(
        "rinkeby",
        process.env.REACT_APP_ALCHEMY_API_KEY
      );
      const ownerWalletWithProvider = new ethers.Wallet(
        process.env.REACT_APP_PRIVATE_KEY,
        regularProvider
      );
      const relayContractSign = await new ethers.Contract(
        relayHubDeployed.address,
        RelayHub.abi,
        ownerWalletWithProvider
      );

      //create new instance of Level1Completion contract
      const Level1CompletionAddress = level1CompletionDeployed.address;
      const Level1CompletionContract = await new ethers.Contract(
        Level1CompletionAddress,
        Level1Completion.abi,
        relayProvider.getSigner()
      );

      //let onetimeAccount connect to contract
      const ephemeralContract = Level1CompletionContract.connect(
        relayProvider.getSigner(oneTimeAccount.address)
      );
      setLevel1CompletionContractEphemeral(ephemeralContract);
    }
  }, [relayProvider, oneTimeAccount, localHttpProvider]);

  //Level1Completiion Contract Function

  async function awardPOAP() {
    if (ethers.utils.isAddress(userSubmittedAddress)) {
      setRelayMessage("Relay Sent. Waiting for response...");
      setErrorMessage("");
      Level1CompletionContractEphemeral.awardCertificate(
        userSubmittedAddress,
        metaData
      )
        .then((result) => {
          console.log(result, "award result");
          setRelayMessage("");
          setProofOfTxn(result);
          setLoading(true);
          relayProvider.waitForTransaction(result.hash).then(async () => {
            const newTokenID =
              await Level1CompletionContractEphemeral.tokenOfOwnerByIndex(
                userSubmittedAddress,
                0
              );
            const newTokenURI =
              await Level1CompletionContractEphemeral.tokenURI(newTokenID);
            setPAOPTokenID(newTokenID);
            setUserSubmittedAddress("");
            setLoading(false);
            console.log({
              userSubmittedAddress: userSubmittedAddress,
              newTokenID: newTokenID.toNumber(),
              "RELEVANT TXN RESULTS RESULTS": newTokenURI,
            });
          });
        })

        .catch((error) => {
          setLoading(false);
          console.log(error.data.message, "award error");
          if (error.message.includes("awarded")) {
            setErrorMessage("learner has already been awarded this token");
          } else {
            setErrorMessage(error);
          }
        });
    } else {
      setErrorMessage("Please enter a valid ethereum address");
    }
  }

  return (
    <div className="container">
      <input
        name="userAddress"
        type="text"
        placeholder="enter ethereum address here"
        onChange={(e) => setUserSubmittedAddress(e.target.value)}
        value={userSubmittedAddress || ""}
        className="input input-bordered w-full max-w-xs mb-4 text-center"
      />

      <button
        className="btn btn-accent btn-outline btn-block w-full max-w-xs mb-4"
        onClick={awardPOAP}
      >
        Mint NFT
      </button>
      {relayMessage ? <p>{relayMessage}</p> : null}

      {proofOfTxn ? (
        <p style={{ color: "white", fontSize: "25px" }}>
          Transaction Hash: {proofOfTxn.hash}
        </p>
      ) : null}
      {loading ? (
        <div style={{ marginTop: "30px" }}>
          <Loading />
          <p>Waiting for transaction to mine...</p>
        </div>
      ) : null}

      {poapTokenID ? (
        <>
          <p>Transaction Success!</p>
          <p>New Token ID: {poapTokenID.toNumber()}</p>
        </>
      ) : null}

      {errorMessage}
    </div>
  );
};

export default MintNFT;
