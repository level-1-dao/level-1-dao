import { useRouter } from 'next/router';
import Image from 'next/image';

const NFT = () => {
  const router = useRouter();

  return (
    <div className="card lg:card-side bordered bg-primary">
      <div className="relative w-32 h-auto">
        <Image
          src={`${router.basePath}/assets/images/token.png`}
          alt="NFT"
          layout="fill"
        />
      </div>
      <div className="p-4 font-bold">
        <p>Receive &quot;Level1: What is a DAO&quot; NFT badge on completion</p>
      </div>
    </div>
  );
};

export default NFT;
