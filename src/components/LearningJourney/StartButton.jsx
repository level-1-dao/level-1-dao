import { useMutation } from "../../lib/apollo";
import {
  ADD_USER_LEARNING_JOURNEYS,
  UPDATE_USER_LEARNING_JOURNEY_PROGRESS,
} from "../../lib/graphql";

const StartButton = ({
  userId,
  learningJourneyId,
  learningJourneyTitle,
  inProgress,
  handleStart,
  userLearningJourneyData,
}) => {
  const {
    load: continueLevel,
    loading: loadingContinueLevel,
    error: errorContinueLevel,
  } = useMutation(UPDATE_USER_LEARNING_JOURNEY_PROGRESS, {
    onCompleted: (data) => {
      // TODO - show alert/toast
      console.log("continue user learning journey ", data);
      return;
    },
    onError: (errorContinueLevel) => {
      // TODO - show alert/toast
      console.log("continue user learning journey error", errorContinueLevel);
      return;
    },
  });

  const {
    load: startLevel,
    loading: loadingStartLevel,
    error: errorStartLevel,
  } = useMutation(ADD_USER_LEARNING_JOURNEYS, {
    onCompleted: (data) => {
      // TODO - show alert/toast
      console.log("add user learning journey ", data);
      return;
    },
    onError: (errorStartLevel) => {
      // TODO - show alert/toast
      console.log("add user learning journey error", errorStartLevel);
      return;
    },
  });

  const goToLevel = () => {
    if (!inProgress) {
      startLevel({
        variables: {
          userId: userId,
          learningJourneyId: learningJourneyId,
          title: learningJourneyTitle,
        },
      });
    } else {
      continueLevel({
        variables: {
          id: userLearningJourneyData.id,
          updatedAt: new Date(),
          receivedTokens: userLearningJourneyData.receivedTokens,
        },
      });
      handleStart();
    }
  };

  return (
    <div className="start-level">
      <button
        className="btn btn-primary"
        onClick={() => goToLevel()}
        disabled={loadingContinueLevel || loadingStartLevel}
      >
        <span className="text-sm">
          {inProgress
            ? "Continue this learning journey"
            : "Start this learning journey"}
        </span>
      </button>
    </div>
  );
};

export default StartButton;
