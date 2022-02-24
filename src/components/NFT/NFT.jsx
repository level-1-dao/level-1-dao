import { useRouter } from "next/router";
import Image from "next/image";

const NFT = ({ setFinishedJourney }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => setFinishedJourney(true)}
      className="flex hazy-candy-floss-background cursor-pointer items-center rounded-lg text-secondary-content shadow-lg hover:shadow-2xl w-full border border-gray-400"
    >
      {/* <div className="relative w-16 h-auto">
        <Image
          src={`${router.basePath}/assets/images/thunderbolt.png`}
          alt="NFT"
          layout="responsive"
          width={100}
          height={100}
          priority={true}
        />
      </div> */}
      <div className="p-4 shine">
        <p className="text-base">You have completed this Level1 journey!</p>
        <p className="font-bold text-lg">Mint your learning badge.</p>
      </div>
    </div>
  );
};

export default NFT;
