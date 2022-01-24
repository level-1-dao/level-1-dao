import { React } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../components/Testimonial";

import {
  CashIcon,
  ChartSquareBarIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import { StartButton } from "../components/StartLevel";

const LearningSplashPage = ({ userId, learningJourneyId }) => {

  return (
    <div>
      <div className="badge badge-info flex">
        <CashIcon className="h-4 w-4 mr-1" />
        100 Level1 tokens on completion
      </div>
      <h1 className="text-6xl font-bold">GitcoinDAO Onboarding</h1>
      {/* <Instructor /> */}
      <div className="guide-container flex space-x-2">
        <div className="avatar">
          <div className="rounded-full w-14 h-14">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt="guide avatar"
              width={150}
              height={150}
              layout="responsive"
            />
          </div>
        </div>
        <div className="guide-text">
          <h5 className="text-sm">
            <span className="text-gray-500">Guide</span>
          </h5>
          <p className="text-lg">
            <span>Leslie Alexander</span>
          </p>
        </div>
      </div>
      <div className="details space-y-4 my-4">
        {/* <AccessInfo /> */}
        <div className="access-info-container flex space-x-2">
          <TicketIcon className="h-6 w-6" aria-hidden="true" />
          <p>Open to members of GitcoinDAO</p>
        </div>
        {/* <NumbersCompleted /> */}
        <div className="numbers-completed-container flex space-x-2">
          <ChartSquareBarIcon className="h-6 w-6" aria-hidden="true" />
          <p>734 people completed this learning journey</p>
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
        <Link href="#">
          <a className="btn btn-white btn-outline">
            <span className="text-sm">Bookmark</span>
          </a>
        </Link>
        {/* Start level button */}
        <StartButton userId={userId} learningJourneyId={learningJourneyId} started />
      </div>
      {/* <Details /> */}
      <div className="details my-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-lg">
          This Level1 module is designed to help you get started with
          GitcoinDAO.
          <br />
          <br />
        </p>
        After completing this Level1 you will:
        <ul className="list-disc list-inside">
          <li>Have an understanding of the values & mission of GitcoinDAO</li>
          <li>Have an understanding of how they can earn with GitcoinDAO</li>
          <li>
            Have an understanding of how to find opportunities and apply to them
          </li>
          <li>Have key contacts to go to for help & other questions</li>
          <li>Have proper access & permissions to get started</li>
        </ul>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <Testimonial
          avatar="https://picsum.photos/id/338/200/300"
          name="Cary Ann"
          role="Completed"
          testimonial="This was great. I learned a lot and I'm really excited to continue learning."
        />
        <Testimonial
          avatar="https://picsum.photos/id/433/200/300"
          name="James Dean"
          role="In progress"
          testimonial="Thank you for putting this information in easy to absorb bite sizes. I'm excited to see what comes next!"
        />
      </div>
    </div>
  );
};

export default LearningSplashPage;
