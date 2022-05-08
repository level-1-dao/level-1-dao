import Image from "next/image";
import Link from "next/link";

const POAP = ({ poap }) => {
  return (
    <div className="text-center">
      <Image
        src="/assets/images/logos/poap.svg"
        width={100}
        height={100}
        className="mx-auto"
        alt="POAP"
      />
      <h1>Your POAP Link</h1>
      <Link href={poap[0].link}>
        <a target="_blank">{poap[0].link}</a>
      </Link>
    </div>
  );
};

export default POAP;
