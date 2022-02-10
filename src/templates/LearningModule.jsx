import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LEARNING_MOMENTS } from "../lib/graphql";
import Loading from "../components/Loading";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";

const LearningModule = ({ learningBitData }) => {
  const { loading, error, data } = useQuery(GET_LEARNING_MOMENTS, {
    variables: {
      learningBitId: learningBitData.id,
    },
  });
  const learningMoments = data?.learningMoments;
  return (
    <div className="px-2 sm:px-4">
      {/* <VideoPlayer /> */}
      {learningBitData.contentType === "video" && (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={learningBitData.content}
            width="100%"
            height="100%"
          />
        </div>
      )}
      {learningBitData.contentType === "text" && (
        <div className="text-container">
          <p>{learningBitData.content}</p>
        </div>
      )}
      {learningBitData.contentType === "image" && (
        <div className="relative">
          <img
            src={learningBitData.content}
            layout="responsive"
            alt="image content"
          />
        </div>
      )}

      {/* Learn with */}
      <div className="learn-with-container space-y-12 py-12">
        <GuideNotes guideNoteData={learningBitData.guideNotes} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="header">
              <h2 className="text-xl tracking-tight">Learning prompt</h2>
              <p className="text-2xl font-extrabold">
                {learningBitData.prompt
                  ? learningBitData.prompt
                  : "Use this as an opportunity to reflect on what you have learned from this content."}
              </p>
            </div>
            <Input learningBitId={learningBitData.id} />
            <GoodCompany learningMoments={learningMoments} />
            <Feed learningMoments={learningMoments} />
          </>
        )}
      </div>
    </div>
  );
};

export default LearningModule;
