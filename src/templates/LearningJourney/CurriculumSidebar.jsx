import { useState } from "react";
import { NFT } from "../../components/NFT";
import PopUp from "../../components/FinishLevel/Modal";
import Curriculum from "../../components/Curriculum";
import { Progress } from "../../components/LearningJourney";
import Confetti from "react-confetti";

const CurriculumSidebar = ({
  learningJourneyId,
  learningJourneyName,
  learningBits,
  started,
  inProgress,
  currentBit,
  user,
}) => {
  const [finishedJourney, setFinishedJourney] = useState(false);
  const todoLearningBits = learningBits.length;
  let completedLearningBits = 0;

  const checkIfJourneyComplete = (user, learningBits) => {
    const userLearningMomentsIds = user.user_learning_moments.map(
      (learningMoment) => learningMoment.learningBitId
    );
    const userLearningBits = learningBits.filter(
      (learningBit) =>
        userLearningMomentsIds.includes(learningBit.id) &&
        learningBit.learningMomentId !== null
    );
    completedLearningBits = userLearningBits.length;
    if (userLearningBits.length === learningBits.length) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col space-y-4 items-center w-full p-4 rounded bg-base-200 border border-gray-400">
      {checkIfJourneyComplete(user, learningBits) ? (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            recycle={false}
          />
          <NFT setFinishedJourney={setFinishedJourney} />
        </>
      ) : (
        <Progress todo={todoLearningBits} completed={completedLearningBits} />
      )}
      <PopUp
        setOpen={setFinishedJourney}
        open={finishedJourney}
        learningJourneyName={learningJourneyName}
      />
      <Curriculum
        learningBits={learningBits}
        started={started}
        inProgress={inProgress}
        learningJourneyId={learningJourneyId}
        currentBit={currentBit}
        user={user}
      />
    </div>
  );
};

export default CurriculumSidebar;
