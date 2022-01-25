import {useState} from 'react';
import {Meta} from '../../../layout/Meta.tsx';
import AppPageTwoColumn from '../../../layout/AppPageTwoColumn';
import LearningModule from '../../../templates/LearningModule';
import Curriculum from '../../../components/Curriculum';
import Learn2Earn from '../../../../build/contracts/Learn2Earn.json';
import Level1Completion from '../../../../build/contracts/Level1Completion.json';
import {Modal} from '../../../components/NFT';
import PopUp from '../../../components/FinishLevel/Modal';
import GitcoinCurriculumData from '../../../mockData/GitcoinCurriculumData';
import {createAlchemyWeb3} from '@alch/alchemy-web3';

const LearningLandingPage = () => {
  const [curriculumProgress, setCurriculumProgress] = useState(1);
  const [tokensCollected, setTokensCollected] = useState(0);
  const [nftModalOpen, setNftModalOpen] = useState(false);
  const [finishedLevel, setFinishedLevel] = useState(false);
  const [minting, setMinting] = useState(false);
  const [addingTokens, setAddingTokens] = useState(false);
  const [mintComplete, setMintComplete] = useState(false);
  const [addTokensComplete, setAddTokensComplete] = useState(false);

  const handleNftModal = (state) => {
    setNftModalOpen(state);
  };

  const addTokens = (tokens) => {
    setTokensCollected(tokensCollected + tokens);
  };

  const handleCurriculumProgress = (progress, tokens) => {
    setCurriculumProgress(progress);
    addTokens(tokens);
  };

  const curriculumSize = GitcoinCurriculumData.length;
  const web3 = createAlchemyWeb3(
    'https://eth-rinkeby.alchemyapi.io/v2/XW3eK_0nzE7TCKgZ589OxC94gNQrYJyW'
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
          'https://gateway.pinata.cloud/ipfs/QmaLQ22ExEhxLenfCdu5k3pGUDQPH9bAf4Q8axmbokd38N'
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
    <div className="h-full">
      <AppPageTwoColumn
        meta={
          <Meta
            title="Level1"
            description="A fun and friendly space for DAO onboarding"
          />
        }
        leftColumn={
          <LearningModule
            curriculum={GitcoinCurriculumData[curriculumProgress - 1]}
            triggerModal={handleNftModal}
          />
        }
        rightColumn={
          <div className="flex flex-col space-y-4 items-center w-full px-4">
            <button className="btn btn-accent btn-outline text-left w-full">
              L1 tokens collected:
              <div className="badge ml-2">
                <span className="font-mono text-lg countdown">
                  <span style={{'--value': tokensCollected}}></span>
                </span>
              </div>
            </button>
            {/* Temporary Curriculum Progress Stepper UI */}
            {curriculumProgress < curriculumSize ? (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div
                    className="btn"
                    onClick={() =>
                      handleCurriculumProgress(
                        curriculumProgress + 1,
                        GitcoinCurriculumData[curriculumProgress].tokens
                      )
                    }
                  >
                    Progress to step {curriculumProgress + 1}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="btn" onClick={() => setFinishedLevel(true)}>
                    Finish learning module
                  </div>
                </div>
              </div>
            )}
            <Curriculum
              active={curriculumProgress}
              curriculum={GitcoinCurriculumData}
            />
          </div>
        }
      />
      <Modal setOpen={handleNftModal} open={nftModalOpen} />
      <PopUp
        setOpen={setFinishedLevel}
        open={finishedLevel}
        awardTokens={awardUser}
        mintNft={awardNFT}
        minting={minting}
        addingTokens={addingTokens}
        mintComplete={mintComplete}
        addTokensComplete={addTokensComplete}
      />
    </div>
  );
};

export default LearningLandingPage;
