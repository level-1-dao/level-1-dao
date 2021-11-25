import { Meta } from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningModule from '../../templates/LearningModule';
import Curriculum from '../../components/Curriculum';

import CurriculumData from '../../mockData/CurriculumData';

const LearningLandingPage = () => (
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
          <Curriculum active={1} curriculum={CurriculumData} />
        </div>
      }
    />
  </div>
);

export default LearningLandingPage;
