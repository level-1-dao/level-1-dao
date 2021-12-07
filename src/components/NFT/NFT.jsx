import {useRouter} from 'next/router';
import Image from 'next/image';

const NFT = () => {
  const router = useRouter();

  return (
    <div className="flex items-center rounded-lg border border-base-content text-base-content">
      <div className="relative w-48 h-auto">
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
        <p>Receive GitcoinDAO NFT badge on completion.</p>
      </div>
    </div>
  );
};

export default NFT;
