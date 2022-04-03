import { useState, useEffect } from "react";
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
  nftMetaData,
}) => {
  const [completed, setCompleted] = useState(false);
  const [mintedNft, setMintedNft] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [completedLearningBits, setCompletedLearningBits] = useState(-1);
  const learningBitsLength = learningBits.length;

  const allowMintNftOnCompletion = (
    numberOfLearningBitsCompletedByUser,
    learningBitsLength
  ) => {
    console.log("completedLearningBits", completedLearningBits);
    console.log(
      "numberOfLearningBitsCompletedByUser",
      numberOfLearningBitsCompletedByUser
    );
    if (numberOfLearningBitsCompletedByUser === learningBitsLength) {
      if (
        completedLearningBits !== numberOfLearningBitsCompletedByUser &&
        completedLearningBits > -1
      ) {
        console.log("trigger confetti");
        setConfetti(true);
        setModalOpen(true);
      }
      setCompleted(true);
    } else {
      setCompleted(false);
    }
    setCompletedLearningBits(numberOfLearningBitsCompletedByUser);
    return;
  };

  const checkIfUserMintedNFT = (user, learningBits) => {
    const userLearningJourney = user.user_learning_journeys?.find(
      (learningJourney) =>
        learningJourney.learningJourneyId === learningJourneyId
    );
    if (userLearningJourney?.minted) {
      setMintedNft(true);
    }
  };

  const getNumberOfLearningBitsCompletedByUser = (user, learningBits) => {
    const userLearningMomentsIds = user.user_learning_moments.map(
      (learningMoment) => learningMoment.learningBitId
    );
    const userLearningBits = learningBits.filter(
      (learningBit) =>
        userLearningMomentsIds.includes(learningBit.id) &&
        learningBit.learningMomentId !== null
    );
    return userLearningBits.length;
  };

  useEffect(() => {
    user &&
      allowMintNftOnCompletion(
        getNumberOfLearningBitsCompletedByUser(user, learningBits),
        learningBitsLength
      );
  }, [user]);

  return (
    <div className="flex flex-col space-y-4 items-center w-full p-4 rounded bg-base-200 border border-gray-400">
      {completed ? (
        <>
          {confetti && (
            <Confetti
              width={window.innerWidth}
              height={
                document.body.scrollHeight > window.innerHeight
                  ? document.body.scrollHeight
                  : window.innerHeight
              }
              numberOfPieces={500}
              recycle={false}
            />
          )}
          <NFT setModalOpen={setModalOpen} />
        </>
      ) : (
        <Progress todo={learningBitsLength} completed={completedLearningBits} />
      )}
      <PopUp
        setOpen={setModalOpen}
        open={modalOpen}
        learningJourneyName={learningJourneyName}
        nftMetaData={nftMetaData}
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
