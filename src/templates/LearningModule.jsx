import React from "react";
import { Input, Feed, GoodCompany, GuideNotes } from "../components/LearnWith";

import ReactPlayer from "react-player";

const LearningModule = ({ curriculum, triggerModal }) => {
  return (
    <div className="px-2 sm:px-4">
      {/* <VideoPlayer /> */}
      {curriculum.contentType === "video" && (
        <div className="video-container">
          <ReactPlayer url={curriculum.link} />
        </div>
      )}
      {curriculum.contentType === "text" && (
        <div className="text-container">
          <p>{curriculum.content}</p>
        </div>
      )}
      {curriculum.contentType === "image" && (
        <div className="relative">
          <img
            src={`/assets/images/${curriculum.link}`}
            layout="responsive"
            alt="image content"
          />
        </div>
      )}
      {curriculum.contentType === "quiz" && (
        <div className="quiz-container">
          <div className="p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">{curriculum.question}</span>
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
        <GuideNotes notes={curriculum.description} />
        <GoodCompany />
        <Input />
        <Feed />
      </div>
    </div>
  );
};

export default LearningModule;
