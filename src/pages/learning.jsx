import { Meta } from '../layout/Meta.tsx';
import AppPageTwoColumn from '../templates/AppPageTwoColumn';

const LearningLandingPage = () => (
  <AppPageTwoColumn
    meta={
      <Meta
        title="Level1"
        description="A fun and friendly space for DAO onboarding"
      />
    }
  />
);

export default LearningLandingPage;
