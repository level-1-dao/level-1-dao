import { GET_LEARNING_BIT } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningModule from "../../templates/LearningModule";
import Loading from "../../components/Loading";

const ContentView = ({ learningBitId, learningJourneyTitle }) => {
  const { loading, error, data } = useQuery(GET_LEARNING_BIT, {
    variables: { learningBitId: learningBitId },
  });
  const learningBitData = data?.learningBits[0];

  return (
    <>
      {loading && <Loading />}
      {!loading && !error && (
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
