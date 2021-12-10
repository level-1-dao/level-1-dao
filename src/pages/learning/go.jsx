import {useState} from 'react';
import {Meta} from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningModule from '../../templates/LearningModule';
import Curriculum from '../../components/Curriculum';
import Learn2Earn from '../../../build/contracts/Learn2Earn.json';
import {Modal} from '../../components/NFT';
import GitcoinCurriculumData from '../../mockData/GitcoinCurriculumData';
import { createAlchemyWeb3 } from '@alch/alchemy-web3'; 

const LearningLandingPage = () => {
  const [curriculumProgress, setCurriculumProgress] = useState(1);
  const [tokensCollected, setTokensCollected] = useState(0);
  const [nftModalOpen, setNftModalOpen] = useState(false);

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
  const web3 = createAlchemyWeb3('https://eth-rinkeby.alchemyapi.io/v2/XW3eK_0nzE7TCKgZ589OxC94gNQrYJyW'); 

  const id = web3.eth.net.getId();  

  const deployedNetwork = Learn2Earn.networks[4];
  let learn2EarnInstance = new web3.eth.Contract(
      Learn2Earn.abi,
      deployedNetwork.address
    );

  async function awardUser() {    
      const learnerAddress = await web3.eth.getAccounts();
       const levelOneAward = await learn2EarnInstance.methods
      .awardUser(learnerAddress[0], 90)
      .send({
        from: learnerAddress[0],
      });  
      return levelOneAward.status;
};  

  async function awardNFT() {  
    const learnerAddress = await web3.eth.getAccounts();
    const nftAward = await learn2EarnInstance.methods
      .awardCertificate(learnerAddress[0], 'https://gateway.pinata.cloud/ipfs/QmaLQ22ExEhxLenfCdu5k3pGUDQPH9bAf4Q8axmbokd38N' )
      .send({
        from: learnerAddress[0],
      }); 
      return nftAward.status;
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
                  <div className="btn" onClick={() => awardUser()}>
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
    </div>
  );
};

export default LearningLandingPage;
