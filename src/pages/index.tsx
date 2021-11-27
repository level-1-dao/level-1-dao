import { Meta } from '../layout/Meta';
import MarketingPage from '../templates/MarketingPage';

const Index = () => {
  return (
    <MarketingPage
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
    >
      <h1 className="font-bold text-2xl text-secondary">
        Press start to begin
      </h1>
    </MarketingPage>
  );
};

export default Index;
