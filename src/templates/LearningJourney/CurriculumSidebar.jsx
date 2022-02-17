import { useState } from "react";
import { NFT } from "../../components/NFT";
import PopUp from "../../components/FinishLevel/Modal";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import Level1Completion from "../../../build/contracts/Level1Completion.json";
import Learn2Earn from "../../../build/contracts/Learn2Earn.json";
import Curriculum from "../../components/Curriculum";

const CurriculumSidebar = ({
  learningJourneyId,
  learningBits,
  started,
  currentBit,
  user,
}) => {
  const [finishedJourney, setFinishedJourney] = useState(false);
  const [minting, setMinting] = useState(false);
  const [addingTokens, setAddingTokens] = useState(false);
  const [mintComplete, setMintComplete] = useState(false);
  const [addTokensComplete, setAddTokensComplete] = useState(false);

  const checkIfJourneyComplete = (user, learningBits) => {
    const userLearningMoments = user.user_details.learningMoments;
    const userLearningMomentsIds = userLearningMoments.map(
      (learningMoment) => learningMoment.learningBitId
    );
    const userLearningBits = learningBits.filter(
      (learningBit) =>
        userLearningMomentsIds.includes(learningBit.id) &&
        learningBit.learningMomentId !== null
    );
    if (userLearningBits.length === learningBits.length) {
      return true;
    }
    return false;
  };

  const web3 = createAlchemyWeb3(
    "https://eth-rinkeby.alchemyapi.io/v2/XW3eK_0nzE7TCKgZ589OxC94gNQrYJyW"
  );

  const id = web3.eth.net.getId();

  const deployedNetwork = Learn2Earn.networks[4];
  let learn2EarnInstance = new web3.eth.Contract(
    Learn2Earn.abi,
    deployedNetwork.address
  );

  const level1NFTDeployedNetwork = Level1Completion.networks[4];
  let level1NFTInstance = new web3.eth.Contract(
    Level1Completion.abi,
    level1NFTDeployedNetwork.address
  );

  async function awardUser() {
    setAddingTokens(true);
    try {
      const learnerAddress = await web3.eth.getAccounts();
      const levelOneAward = await learn2EarnInstance.methods
        .awardUser(learnerAddress[0], 90)
        .send({
          from: learnerAddress[0],
        });
      if (levelOneAward.status) {
        setAddTokensComplete(true);
        setAddingTokens(false);
      }
      return levelOneAward.status;
    } catch (error) {
      console.log(error);
      setAddingTokens(false);
      return;
    }
    return;
  }

  async function awardNFT() {
    setMinting(true);
    try {
      const learnerAddress = await web3.eth.getAccounts();
      const nftAward = await level1NFTInstance.methods
        .awardCertificate(
          learnerAddress[0],
          "https://gateway.pinata.cloud/ipfs/QmaLQ22ExEhxLenfCdu5k3pGUDQPH9bAf4Q8axmbokd38N"
        )
        .send({
          from: learnerAddress[0],
        });
      if (nftAward.status) {
        setMintComplete(true);
        setMinting(false);
      }
      return nftAward.status;
    } catch (error) {
      console.log(error);
      setMinting(false);
      return;
    }
    return;
  }

  return (
    <div className="flex flex-col space-y-4 items-center w-full p-4 rounded bg-base-200">
      {checkIfJourneyComplete(user, learningBits) && (
        <NFT setFinishedJourney={setFinishedJourney} />
      )}
      <PopUp
        setOpen={setFinishedJourney}
        open={finishedJourney}
        awardTokens={awardUser}
        mintNft={awardNFT}
        minting={minting}
        addingTokens={addingTokens}
        mintComplete={mintComplete}
        addTokensComplete={addTokensComplete}
      />
      <Curriculum
        learningBits={learningBits}
        started={started}
        learningJourneyId={learningJourneyId}
        currentBit={currentBit}
        user={user}
      />
    </div>
  );
};

export default CurriculumSidebar;
