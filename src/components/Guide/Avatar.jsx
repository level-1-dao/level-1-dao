import Image from "next/image";
import { generateFromString } from "generate-avatar";

const Avatar = ({ guide, size }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="avatar">
        <div
          className={`rounded-full ${
            size === "small" ? "w-10 h-10" : "w-14 h-14"
          }`}
        >
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
        <p className={`${size === "small" ? "tex-base" : "text-lg"}`}>
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
