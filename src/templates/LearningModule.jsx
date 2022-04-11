import { useEffect } from "react";
import Link from "next/link";
import { useSubscription } from "@apollo/client";
import { SUBSCRIBE_LEARNING_MOMENTS } from "../lib/graphql";
import Loading from "../components/Loading";
import { Meta } from "../layout/Meta";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";
import { MarkdownContent } from "../components/LearningJourney";

const LearningModule = ({ learningBitData, learningJourneyTitle }) => {
  const { loading, error, data } = useSubscription(SUBSCRIBE_LEARNING_MOMENTS, {
    variables: {
      learningBitId: learningBitData.id,
    },
  });
  const learningMoments = data?.learningMoments;

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || "";

  return (
    <div className="space-y-8">
      <Meta
        title={`${learningJourneyTitle ? learningJourneyTitle : "Level1"} | ${
          learningBitData.title
        }`}
        description={learningBitData.guideNotes?.note || null}
      />
      <div className="px-2 sm:px-4 space-y-4 bg-base-200 p-4 rounded border border-gray-400">
        <div className="py-4">
          <h2 className="text-xs font-semibold text-primary tracking-wide uppercase">
            Learning Bit
          </h2>
          <p className="mt-1 text-2xl font-extrabold sm:tracking-tight text-base-content">
            {learningBitData.title}
          </p>
        </div>
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
                  controls
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
        <div className="description-container text-lg p-4 bg-primary rounded-lg">
          <div className="text-accent-content">
            <MarkdownContent content={learningBitData.description} />
          </div>
        </div>
        <div className="divider py-4"></div>
        <div className="learn-with-container space-y-12">
          {loading && learningMoments ? (
            <Loading />
          ) : (
            <>
              <div className="header">
                <h2 className="text-xl tracking-tight">
                  Participate in this learning bit by sharing your reflection.
                </h2>
                <div className="input-container">
                  <p className="text-2xl font-extrabold my-4">
                    {learningBitData.prompt
                      ? learningBitData.prompt
                      : "Use this as an opportunity to reflect on what you have learned from this content."}
                  </p>
                  <Input learningBitId={learningBitData.id} />
                </div>
              </div>
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
