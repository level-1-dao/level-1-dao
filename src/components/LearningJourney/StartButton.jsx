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
}) => {
  const {
    load: startLevel,
    loading,
    error,
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
    }
    handleStart();
  };

  return (
    <div className="start-level">
      <button
        className="btn btn-primary"
        onClick={() => goToLevel()}
        disabled={loading}
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
