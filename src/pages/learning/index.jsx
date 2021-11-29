import {Meta} from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningSplashPage from '../../templates/LearningSplashPage';
import NFT from '../../components/NFT';
import Curriculum from '../../components/Curriculum';

import CurriculumData from '../../mockData/CurriculumData';

const LearningLandingPage = () => (
  <div className="h-full">
    <AppPageTwoColumn
      meta={
        <Meta
          title="GitcoinDAO Level1"
          description="Your first steps to contributing to the GitcoinDAO"
        />
      }
      leftColumn={<LearningSplashPage />}
      rightColumn={
        <div className="flex flex-col space-y-4 items-center w-full px-4">
          {/* <AccessInfo /> */}
          <div className="card glass lg:card-side text-neutral-content">
            <div className="max-w-md card-body">
              <p>This learning module is available to GitcoinDAO members.</p>
              <div className="card-actions">
                <button className="btn btn-sm glass rounded-full">
                  Join GitcoinDAO
                </button>
              </div>
            </div>
          </div>
          <NFT />
          <Curriculum curriculum={CurriculumData} />
        </div>
      }
    />
  </div>
);

export default LearningLandingPage;
