import { useMutation } from "../../lib/apollo";
import { UPDATE_USER_LEARNING_JOURNEY_PROGRESS } from "../../lib/graphql";

const MoveStep = ({ userLearningJourneyId, moveTo }) => {
  const {
    load: moveStep,
    loading,
    error,
  } = useMutation(UPDATE_USER_LEARNING_JOURNEY_PROGRESS, {
    onCompleted: (data) => {
      // TODO - show alert/toast
      console.log("move step in learning journey ", data);
      return;
    },
    onError: (errorContinueLevel) => {
      // TODO - show alert/toast
      console.log("move step in learning journey", errorContinueLevel);
      return;
    },
  });

  const moveAStep = () => {
    moveStep({
      variables: {
        id: userLearningJourneyId,
        progress: moveTo,
        updatedAt: new Date(),
      },
    });
  };

  return (
    <button className="btn" onClick={moveAStep}>
      Go to step {moveTo}
    </button>
  );
};

export default MoveStep;
