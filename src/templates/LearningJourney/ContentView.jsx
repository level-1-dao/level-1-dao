import { useState } from "react";
import { Modal } from "../../components/NFT";
import LearningModule from "../../templates/LearningModule";

const ContentView = ({ curriculumData, progress }) => {
  const [nftModalOpen, setNftModalOpen] = useState(false);

  const handleNftModal = (state) => {
    setNftModalOpen(state);
  };

  return (
    <>
      <LearningModule
        curriculumData={curriculumData[progress]}
        triggerModal={handleNftModal}
      />
      <Modal setOpen={handleNftModal} open={nftModalOpen} />
    </>
  );
};

export default ContentView;
