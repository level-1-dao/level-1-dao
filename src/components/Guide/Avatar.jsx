import Image from "next/image";
import { generateFromString } from "generate-avatar";

const Avatar = ({ guide }) => {
  return (
    <div key={guide.id}>
      <div className="avatar">
        <div className="rounded-full w-14 h-14">
          <Image
            src={
              guide.guide_info?.avatar
                ? guide.guide_info.avatar
                : `data:image/svg+xml;utf8,${generateFromString(guide.id)}`
            }
            alt="guide avatar"
            width={150}
            height={150}
            layout="responsive"
          />
        </div>
      </div>
      <div className="guide-text">
        <p className="text-lg">
          <span>{guide.guide_info.username}</span>
        </p>
        <h5 className="text-sm">
          <span className="text-gray-500">{guide.role}</span>
        </h5>
      </div>
    </div>
  );
};

export default Avatar;
