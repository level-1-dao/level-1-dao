import { useState } from "react";
import { Modal } from "../../components/NFT";
import { GET_LEARNING_BIT } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningModule from "../../templates/LearningModule";
import Loading from "../../components/Loading";

const ContentView = ({ learningBitId }) => {
  const [nftModalOpen, setNftModalOpen] = useState(false);
  const {
    loading: loadingLearningBitData,
    error: errorGettingLearningBit,
    data: learningBitDataArray,
  } = useQuery(GET_LEARNING_BIT, {
    variables: { learningBitId: learningBitId },
  });
  const learningBitData = learningBitDataArray?.learningBits[0];

  const handleNftModal = (state) => {
    setNftModalOpen(state);
  };

  console.log(learningBitData);

  return (
    <>
      {loadingLearningBitData && <Loading />}
      {!loadingLearningBitData && !errorGettingLearningBit && (
        <>
          <LearningModule
            curriculumData={learningBitData}
            triggerModal={handleNftModal}
          />
          <Modal setOpen={handleNftModal} open={nftModalOpen} />
        </>
      )}
    </>
  );
};

export default ContentView;
