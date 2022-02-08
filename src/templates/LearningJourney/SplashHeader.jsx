import Link from "next/link";
import StartButton from "../../components/LearningJourney/StartButton";
import { ChartSquareBarIcon, TicketIcon } from "@heroicons/react/outline";
import { TokensOnCompletionBadge } from "../../components/LearningJourney";
import { Avatar } from "../../components/Guide";
import UpdatedOn from "../../components/LearningJourney/UpdatedOn";

const SplashHeader = ({
  learningJourneyData,
  userLearningJourneyData,
  user,
  handleStart,
}) => {
  return (
    <div className="splash-header">
      <TokensOnCompletionBadge tokens={learningJourneyData.tokensAvailable} />
      <h1 className="text-6xl font-bold">{learningJourneyData.title}</h1>
      <Avatar guideId={learningJourneyData.guide} />
      <div className="details space-y-4 my-4">
        <div className="access-info-container flex space-x-2">
          <TicketIcon className="h-6 w-6" aria-hidden="true" />
          <p>Open to members of GitcoinDAO</p>
        </div>
        {/* <div className="numbers-completed-container flex space-x-2">
          <ChartSquareBarIcon className="h-6 w-6" aria-hidden="true" />
          <p>
            {learningJourneyData.numberCompleted} people completed this learning
            journey
          </p>
        </div> */}
        <UpdatedOn
          updatedOn={learningJourneyData.updated_at}
          createdOn={learningJourneyData.created_at}
        />
      </div>
      {/* <Actions /> */}
      <div className="actions flex space-x-2 my-4">
        <Link href="#">
          <a className="btn btn-white btn-outline">
            <span className="text-sm">Bookmark</span>
          </a>
        </Link>
        {/* Start level button */}
        <StartButton handleStart={handleStart} />
      </div>
    </div>
  );
};

export default SplashHeader;
