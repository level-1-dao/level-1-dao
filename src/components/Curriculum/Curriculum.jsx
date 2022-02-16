import { useRouter } from "next/router";
import {
  VideoCameraIcon,
  PhotographIcon,
  LinkIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

const convertToMinutes = (time) => {
  if (time === 0) {
    return "0 min";
  }
  if (!time) {
    return "--";
  }
  if (typeof time === "string") {
    return time;
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
};

const checkForUsersLearningMoment = (user, learningBitId) => {
  const userLearningMoment = user.user_details.learningMoments.find(
    (learningMoment) => learningMoment.learningBitId === learningBitId
  );
  if (userLearningMoment) {
    return true;
  } else {
    return false;
  }
};

const Curriculum = ({
  learningJourneyId,
  learningBits,
  started,
  currentBit,
  user,
}) => {
  const router = useRouter();
  return (
    <div className="curriculum w-full">
      <h2 className="text-xl mb-4">Learning bits:</h2>
      <div className="curriculum__list space-y-2">
        {learningBits.map((bit) => (
          <div
            key={bit.id}
            className={`curriculum__item flex space-x-4 p-4 rounded items-center cursor-pointer hover:bg-accent-focus hover:text-accent-content
            ${
              currentBit === bit.id &&
              started &&
              "bg-accent text-accent-content"
            }`}
            onClick={() => {
              router.push(`/journey/${learningJourneyId}/?bit=${bit.id}`);
            }}
          >
            <div className="curriculum_id">&#8226;</div>
            <div className="curriculum__content-type">
              {bit.contentType === "video" ? (
                <VideoCameraIcon className="w-6 h-6" />
              ) : bit.contentType === "image" ? (
                <PhotographIcon className="w-6 h-6" />
              ) : bit.contentType === "text" ? (
                <DocumentTextIcon className="w-6 h-6" />
              ) : (
                <LinkIcon className="w-6 h-6" />
              )}
            </div>
            <div className="curriculum_title-runtime w-full">
              <div className="curriculum__item-title text-lg font-bold">
                {bit.title}
              </div>
              <div className="time-tokens-container flex">
                <div className="curriculum__item-time text-sm flex-grow">
                  {convertToMinutes(parseInt(bit.time))}
                </div>
                {checkForUsersLearningMoment(user, bit.id) && (
                  <div className="completed-check justify-end">
                    <div
                      className={`badge ${
                        currentBit !== bit.id && started ? "badge-info" : ""
                      }`}
                    >
                      reflection shared
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
