import { useEffect } from "react";
import Link from "next/link";
import { useSubscription } from "@apollo/client";
import {
  GET_LEARNING_MOMENTS,
  SUBSCRIBE_LEARNING_MOMENTS,
} from "../lib/graphql";
import Loading from "../components/Loading";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";

const LearningModule = ({ learningBitData }) => {
  const { loading, error, data } = useSubscription(SUBSCRIBE_LEARNING_MOMENTS, {
    variables: {
      learningBitId: learningBitData.id,
    },
  });
  const learningMoments = data?.learningMoments;

  return (
    <div className="px-2 sm:px-4 space-y-4">
      <h2 className="text-3xl font-extrabold tracking-tight">Content</h2>
      {/* <ContentPlayer /> */}
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
      {learningBitData.contentType === "image" && (
        <div className="relative">
          <img
            src={learningBitData.content}
            layout="responsive"
            alt="image content"
          />
        </div>
      )}
      {learningBitData.contentType === "link" && (
        <div className="relative">
          <LinkPreview url={learningBitData.content} />
        </div>
      )}

      {/* Direct link to content */}
      {learningBitData.content && (
        <div className="link-to-content">
          <Link href={learningBitData.content}>
            <a target="_blank">{learningBitData.content}</a>
          </Link>
        </div>
      )}

      {/* Description */}
      <div className="description-container text-lg">
        <p>{learningBitData.description}</p>
      </div>

      {/* Learn with */}
      <div className="learn-with-container space-y-12 py-12">
        {loading ? (
          <Loading />
        ) : (
          <>
            <GuideNotes guideNoteData={learningBitData.guideNotes} />
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
