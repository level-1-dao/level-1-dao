import React from 'react';

import ReactPlayer from 'react-player';

const LearningModule = () => {
  return (
    <div>
      {/* <VideoPlayer /> */}
      <div className="video-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=KHm0uUPqmVE" />
      </div>
      {/* <Details /> */}
      <div className="details my-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-lg">
          <span>
            The DAO is a decentralized autonomous organization (DAO) that
            represents a group of people who have agreed to work together to
            achieve a common purpose.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in
            officiis quasi autem earum voluptates eveniet nostrum reiciendis
            nobis veritatis adipisci, ad voluptatibus aut tenetur esse culpa.
            Alias, natus veritatis!
          </span>
        </p>
      </div>
    </div>
  );
};

export default LearningModule;
