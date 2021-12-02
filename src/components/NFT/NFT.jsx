import {useRouter} from 'next/router';
import Image from 'next/image';

const NFT = () => {
  const router = useRouter();

  return (
    <div className="card w-full lg:card-side bordered bg-primary text-primary-content">
      <div className="relative w-60 h-auto">
        <Image
          src={`${router.basePath}/assets/images/thunderbolt.png`}
          alt="NFT"
          layout="responsive"
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <div className="p-4 font-bold">
        <p>
          Receive &quot;Level1: GitcoinDAO Onboarding&quot; NFT badge on
          completion
        </p>
      </div>
    </div>
  );
};

export default NFT;
