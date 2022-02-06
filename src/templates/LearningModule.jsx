import React from "react";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";

const LearningModule = ({ curriculumData, triggerModal }) => {
  return (
    <div className="px-2 sm:px-4">
      {/* <VideoPlayer /> */}
      {curriculumData.contentType === "video" && (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={curriculumData.link}
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
            src={`/assets/images/${curriculumData.link}`}
            layout="responsive"
            alt="image content"
          />
        </div>
      )}
      {curriculumData.contentType === "quiz" && (
        <div className="quiz-container">
          <div className="p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">{curriculumData.question}</span>
              </label>
              <textarea className="textarea h-24"></textarea>
              <div className="mt-8 flex justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => triggerModal(true)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Learn with */}
      <div className="learn-with-container space-y-12 py-12">
        <GuideNotes notes={curriculumData.description} />
        <Input learningBitId="31f63a09-2f2a-42e9-833a-75487dbcefd7" />
        <GoodCompany />
        <Feed />
      </div>
    </div>
  );
};

export default LearningModule;
