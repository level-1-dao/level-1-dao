import { Meta } from '../layout/Meta.tsx';
import AppPageTwoColumn from '../layout/AppPageTwoColumn';
import LearningSplashPage from '../templates/LearningSplashPage';

const LearningLandingPage = () => (
  <div className="h-full">
    <AppPageTwoColumn
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
      leftColumn={<LearningSplashPage />}
    />
  </div>
);

export default LearningLandingPage;
