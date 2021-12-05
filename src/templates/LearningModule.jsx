import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Input, Feed} from '../components/LearnWith';

import ReactPlayer from 'react-player';

const LearningModule = ({curriculum}) => {
  const router = useRouter();

  return (
    <div>
      {/* <VideoPlayer /> */}
      {curriculum.contentType === 'video' && (
        <div className="video-container">
          <ReactPlayer url="https://www.youtube.com/watch?v=KHm0uUPqmVE" />
        </div>
      )}
      {curriculum.contentType === 'text' && (
        <div className="text-container">
          <p>{curriculum.content}</p>
        </div>
      )}
      {curriculum.contentType === 'image' && (
        <div className="relative">
          <img
            src={`${router.basePath}/assets/images/${curriculum.link}`}
            layout="fill"
            alt="content"
          />
        </div>
      )}
      {curriculum.contentType === 'quiz' && (
        <div className="quiz-container">
          <div className="p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">{curriculum.question}</span>
              </label>
              <textarea className="textarea h-24"></textarea>
              <div className="mt-8 flex justify-end">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Details /> */}
      <div className="details my-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-lg">{curriculum.description}</p>
      </div>
      <div className="divider"></div>
      {/* Learn with */}
      <div className="learn-with-container space-y-12 sm:px-2 lg:px-8">
        <Input />
        <Feed />
      </div>
    </div>
  );
};

export default LearningModule;
