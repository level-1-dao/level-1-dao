import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { MarketingPage } from '../templates/MarketingPage';

const Index = () => {
  const router = useRouter();

  return (
    <MarketingPage
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
    >
      <div>
        <img
          src={`${router.basePath}/assets/images/pixel-heart.jpeg`}
          alt="Pixel Heart"
        />
      </div>
      <h1 className="font-bold text-2xl text-secondary">
        Press start to begin
      </h1>
    </MarketingPage>
  );
};

export default Index;
