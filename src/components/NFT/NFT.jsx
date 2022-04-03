import { useRouter } from "next/router";
import Image from "next/image";

const NFT = ({ setModalOpen }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => setModalOpen(true)}
      className="flex hazy-candy-floss-background cursor-pointer items-center rounded-lg text-secondary-content shadow-lg hover:shadow-2xl w-full border border-gray-400"
    >
      <div className="p-4 shine">
        <p className="text-base">You have completed this Level1 journey!</p>
        <p className="font-bold text-lg">Mint your learning badge.</p>
      </div>
    </div>
  );
};

export default NFT;
