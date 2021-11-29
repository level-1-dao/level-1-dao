import {useState} from 'react';
import {Meta} from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningModule from '../../templates/LearningModule';
import Curriculum from '../../components/Curriculum';

import CurriculumData from '../../mockData/CurriculumData';

const LearningLandingPage = () => {
  const [curriculumProgress, setCurriculumProgress] = useState(1);

  const handleCurriculumProgress = (progress) => {
    setCurriculumProgress(progress);
  };

  const curriculumSize = CurriculumData.length;

  return (
    <div className="h-full">
      <AppPageTwoColumn
        meta={
          <Meta
            title="Level1"
            description="A fun and friendly space for DAO onboarding"
          />
        }
        leftColumn={<LearningModule />}
        rightColumn={
          <div className="flex flex-col space-y-4 items-center w-full px-4">
            <button className="btn btn-accent btn-outline text-left w-full">
              L1 tokens collected:
              <div className="badge ml-2">18</div>
            </button>
            {/* Temporary Curriculum Progress Stepper UI */}
            {curriculumProgress < curriculumSize ? (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div
                    className="btn"
                    onClick={() =>
                      handleCurriculumProgress(curriculumProgress + 1)
                    }
                  >
                    Progress to step {curriculumProgress + 1}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div
                    className="btn"
                    onClick={() => alert('You finished learning module')}
                  >
                    Finish learning module
                  </div>
                </div>
              </div>
            )}
            <Curriculum
              active={curriculumProgress}
              curriculum={CurriculumData}
            />
          </div>
        }
      />
    </div>
  );
};

export default LearningLandingPage;
