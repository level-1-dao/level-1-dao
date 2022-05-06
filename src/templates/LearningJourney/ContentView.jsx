import { GET_LEARNING_BIT } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningModule from "../../templates/LearningModule";
import Loading from "../../components/Loading";

const ContentView = ({ learningBitId, learningJourneyTitle }) => {
  const {
    loading: loadingLearningBitData,
    error: errorGettingLearningBit,
    data: learningBitDataArray,
  } = useQuery(GET_LEARNING_BIT, {
    variables: { learningBitId: learningBitId },
  });
  const learningBitData = learningBitDataArray?.learningBits[0];

  console.log(learningBitDataArray);

  return (
    <>
      {loadingLearningBitData && <Loading />}
      {!loadingLearningBitData && !errorGettingLearningBit && (
        <>
          <LearningModule
            learningJourneyTitle={learningJourneyTitle}
            learningBitData={learningBitData}
          />
        </>
      )}
    </>
  );
};

export default ContentView;
