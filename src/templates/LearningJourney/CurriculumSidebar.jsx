import { NFT } from "../../components/NFT";
import Curriculum from "../../components/Curriculum";

const CurriculumSidebar = ({
  learningJourneyId,
  learningBits,
  started,
  currentBit,
  user,
}) => {
  const checkIfJourneyComplete = (user, learningBits) => {
    const userLearningMoments = user.user_details.learningMoments;
    const userLearningMomentsIds = userLearningMoments.map(
      (learningMoment) => learningMoment.learningBitId
    );
    const userLearningBits = learningBits.filter(
      (learningBit) =>
        userLearningMomentsIds.includes(learningBit.id) &&
        learningBit.learningMomentId !== null
    );
    if (userLearningBits.length === learningBits.length) {
      return true;
    }
    return false;
  };
  return (
    <div className="flex flex-col space-y-4 items-center w-full px-4">
      {checkIfJourneyComplete(user, learningBits) && <NFT />}
      <Curriculum
        learningBits={learningBits}
        started={started}
        learningJourneyId={learningJourneyId}
        currentBit={currentBit}
        user={user}
      />
    </div>
  );
};

export default CurriculumSidebar;
