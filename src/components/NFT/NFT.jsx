import { useRouter } from 'next/router';

const NFT = () => {
  const router = useRouter();

  return (
    <div className="card lg:card-side bordered bg-primary">
      <figure>
        <img
          className="h-20 w-20"
          src={`${router.basePath}/assets/images/token.png`}
        />
      </figure>
      <div className="p-4 font-bold">
        <p>Receive "Level1: What is a DAO" NFT badge on completion</p>
      </div>
    </div>
  );
};

export default NFT;
