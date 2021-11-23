import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/pixel-heart.jpeg`}
          alt="Pixel Heart"
        />
      </a>
      <h1 className="font-bold text-2xl text-secondary">Press start to begin</h1>
    </Main>
  );
};

export default Index;
