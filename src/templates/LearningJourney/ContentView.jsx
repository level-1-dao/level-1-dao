import { useState } from "react";
import { Modal } from "../../components/NFT";
import LearningModule from "../../templates/LearningModule";

const ContentView = ({ curriculumData, progress, step }) => {
  const [nftModalOpen, setNftModalOpen] = useState(false);

  const handleNftModal = (state) => {
    setNftModalOpen(state);
  };

  return (
    <>
      <LearningModule
        curriculumData={curriculumData[step - 1]}
        triggerModal={handleNftModal}
      />
      <Modal setOpen={handleNftModal} open={nftModalOpen} />
    </>
  );
};

export default ContentView;
