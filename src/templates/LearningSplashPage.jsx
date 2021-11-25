import { React } from 'react';
import Link from 'next/link';

import Testimonial from '../components/Testimonial';

import {
  CashIcon,
  ChartSquareBarIcon,
  TicketIcon,
} from '@heroicons/react/outline';

const LearningSplashPage = () => {
  return (
    <div>
      <div className="badge badge-info flex">
        <CashIcon className="h-4 w-4 mr-1" />
        100 Level1 tokens on completion
      </div>
      <h1 className="text-6xl font-bold">What is a DAO?</h1>
      {/* <Instructor /> */}
      <div className="instructor-container flex space-x-2">
        <div className="avatar">
          <div className="rounded-full w-14 h-14">
            <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
          </div>
        </div>
        <div className="instructor-text">
          <h5 className="text-sm">
            <span className="text-gray-500">Instructor</span>
          </h5>
          <p className="text-lg">
            <span>Ray Kanani</span>
          </p>
        </div>
      </div>
      <div className="details space-y-4 my-4">
        {/* <AccessInfo /> */}
        <div className="access-info-container flex space-x-2">
          <TicketIcon className="h-6 w-6" aria-hidden="true" />
          <p>Open to members of Level1 DAO</p>
        </div>
        {/* <NumbersCompleted /> */}
        <div className="numbers-completed-container flex space-x-2">
          <ChartSquareBarIcon className="h-6 w-6" aria-hidden="true" />
          <p>734 people completed this lesson</p>
        </div>
        {/* <UpdatedOn /> */}
        <div className="updated-on-container flex space-x-2">
          <span className="text-sm">Published two weeks ago</span>
          <span className="text-sm">|</span>
          <span className="text-sm">Updated two days ago</span>
        </div>
      </div>
      {/* <Actions /> */}
      <div className="actions flex space-x-2 my-4">
        <Link href="/">
          <a className="btn btn-white btn-outline">
            <span className="text-sm">Save to learning list</span>
          </a>
        </Link>
        <Link href="/">
          <a className="btn btn-primary">
            <span className="text-sm">Start this learning</span>
          </a>
        </Link>
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
      <div className="grid gap-4 grid-cols-2">
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default LearningSplashPage;
