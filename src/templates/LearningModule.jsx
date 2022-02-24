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

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || "";

  return (
    <div className="space-y-8">
      <div className="px-2 sm:px-4 space-y-4 bg-base-200 p-4 rounded border border-gray-400">
        <GuideNotes guideNoteData={learningBitData.guideNotes} />
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {learningBitData.content && (
              <div className="link-to-content">
                {capitalize(learningBitData.contentType)} source:
                <Link href={learningBitData.content}>
                  <a target="_blank"> {learningBitData.content}</a>
                </Link>
              </div>
            )}
          </div>
          <figure>
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
              <div className="relative w-full">
                <img
                  src={learningBitData.content}
                  alt="image content"
                  className="w-full"
                />
              </div>
            )}
            {learningBitData.contentType === "link" && (
              <div className="relative p-4">
                <LinkPreview url={learningBitData.content} />
              </div>
            )}
          </figure>
        </div>

        {/* Description */}
        <div className="description-container text-lg p-4 bg-accent rounded-lg">
          <p className="text-accent-content">{learningBitData.description}</p>
        </div>
      </div>

      <div className="px-2 sm:px-4 space-y-4 bg-base-200 p-4 rounded border border-gray-400">
        <div className="learn-with-container space-y-12">
          {loading && learningMoments ? (
            <Loading />
          ) : (
            <>
              <div className="header">
                <h2 className="text-xl tracking-tight">Reflection prompt</h2>
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
    </div>
  );
};

export default LearningModule;
