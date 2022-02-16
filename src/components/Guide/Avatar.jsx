import Image from "next/image";
import { generateFromString } from "generate-avatar";

const Avatar = ({ learningBits }) => {
  const uniqueGuidesArray = [];
  learningBits.filter(function (item) {
    var i = uniqueGuidesArray.findIndex(
      (x) => x.guideNotes.userId == item.guideNotes.userId
    );
    if (i <= -1) {
      uniqueGuidesArray.push(item);
    }
    return null;
  });
  return (
    <div className="guide-container flex space-x-4">
      {uniqueGuidesArray.map((guide) => (
        <div key={guide.id}>
          <div className="avatar">
            <div className="rounded-full w-14 h-14">
              <Image
                src={
                  guide.guideNotes.user && guide.guideNotes.user.avatar
                    ? guide.guideNotes.user.avatar
                    : `data:image/svg+xml;utf8,${generateFromString(
                        guide.guideNotes.userId
                      )}`
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
              <span>{guide.guideNotes.user.username}</span>
            </p>
            <h5 className="text-sm">
              <span className="text-gray-500">{guide.guideNotes.role}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatar;
