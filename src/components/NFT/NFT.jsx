import { useRouter } from "next/router";
import Image from "next/image";

const NFT = () => {
  const router = useRouter();

  return (
    <div className="flex cursor-pointer items-center rounded-lg shadow-2xl text-primary-content bg-primary hover:bg-primary-focus w-full">
      <div className="relative w-16 h-auto">
        <Image
          src={`${router.basePath}/assets/images/thunderbolt.png`}
          alt="NFT"
          layout="responsive"
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <div className="p-4">
        <p className="text-xs">You have completed this Level1 journey!</p>
        <p className="font-bold">Mint your learning badge.</p>
      </div>
    </div>
  );
};

export default NFT;
