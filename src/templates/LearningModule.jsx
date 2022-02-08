import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LEARNING_MOMENTS } from "../lib/graphql";
import Loading from "../components/Loading";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";

const LearningModule = ({ curriculumData, triggerModal }) => {
  const { loading, error, data } = useQuery(GET_LEARNING_MOMENTS, {
    variables: {
      learningBitId: "31f63a09-2f2a-42e9-833a-75487dbcefd7",
    },
  });
  const learningMoments = data?.learningMoments;
  return (
    <div className="px-2 sm:px-4">
      {/* <VideoPlayer /> */}
      {curriculumData.contentType === "video" && (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={curriculumData.content}
            width="100%"
            height="100%"
          />
        </div>
      )}
      {curriculumData.contentType === "text" && (
        <div className="text-container">
          <p>{curriculumData.content}</p>
        </div>
      )}
      {curriculumData.contentType === "image" && (
        <div className="relative">
          <img
            src={curriculumData.content}
            layout="responsive"
            alt="image content"
          />
        </div>
      )}

      {/* Learn with */}
      <div className="learn-with-container space-y-12 py-12">
        <GuideNotes guideNoteData={curriculumData.guideNotes} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Input learningBitId="31f63a09-2f2a-42e9-833a-75487dbcefd7" />
            <GoodCompany learningMoments={learningMoments} />
            <Feed learningMoments={learningMoments} />
          </>
        )}
      </div>
    </div>
  );
};

export default LearningModule;
