import {useState} from 'react';
import {Meta} from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningModule from '../../templates/LearningModule';
import Curriculum from '../../components/Curriculum';
import Web3 from 'web3';

import GitcoinCurriculumData from '../../mockData/GitcoinCurriculumData';
import {learn2EarnAbi} from '../../mockData/SmartContractAbi';

const LearningLandingPage = () => {
  const [curriculumProgress, setCurriculumProgress] = useState(1);

  const [tokensCollected, setTokensCollected] = useState(0);

  const addTokens = (tokens) => {
    setTokensCollected(tokensCollected + tokens);
  };

  const handleCurriculumProgress = (progress, tokens) => {
    setCurriculumProgress(progress);
    addTokens(tokens);
  };

  const curriculumSize = GitcoinCurriculumData.length;
  //(TODO) Place this link inside .env file!
  const web3 = new Web3(
    'https://eth-rinkeby.alchemyapi.io/v2/XW3eK_0nzE7TCKgZ589OxC94gNQrYJyW'
  );
  let learn2EarnInstance = async () => {
    return await new window.web3.eth.Contract(
      learn2EarnAbi,
      learn2EarnContractAddress
    );
  };

  async function awardUser() {
    const learnerAddress = await web3.eth.getAccounts();
    const levelOneAward = await learn2EarnInstance.methods
      .awardUser(learnerAddress, 90)
      .send({
        from: learnerAddress,
      });
    //TODO: Create method for token uri for nft
    const nftAward = await learn2EarnInstance.methods
      .awardCertificate(learnerAddress, 90)
      .send({
        from: learnerAddress,
      });
    console.log(levelOneAward);
    console.log(nftAward);
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
                  <div className="btn" onClick={awardUser()}>
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
    </div>
  );
};

export default LearningLandingPage;
