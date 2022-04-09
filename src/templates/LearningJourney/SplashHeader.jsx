import StartButton from "../../components/LearningJourney/StartButton";
import { ChartSquareBarIcon, TicketIcon } from "@heroicons/react/outline";
import { TokensOnCompletionBadge } from "../../components/LearningJourney";
import { Avatar } from "../../components/Guide";
import UpdatedOn from "../../components/LearningJourney/UpdatedOn";

const SplashHeader = ({
  user,
  learningJourneyData,
  handleStart,
  inProgress,
}) => {
  return (
    <div className="splash-header">
      <TokensOnCompletionBadge tokens={learningJourneyData.tokensAvailable} />
      <h1 className="text-6xl font-bold">{learningJourneyData.title}</h1>
      <UpdatedOn
        updatedOn={learningJourneyData.updated_at}
        createdOn={learningJourneyData.created_at}
      />
      <div className="actions flex space-x-2 my-4">
        <StartButton handleStart={handleStart}>
          {inProgress
            ? "Continue this learning journey"
            : user
            ? "Start this learning journey"
            : "Log-in and start this learning journey"}
        </StartButton>
      </div>
      <h4 className="text-lg mb-4">Guided by:</h4>
      <Avatar learningBits={learningJourneyData.learningBits} />
      <div className="details space-y-4 my-4">
        {/* <div className="access-info-container flex space-x-2">
          <TicketIcon className="h-6 w-6" aria-hidden="true" />
          <p>Open to members of GitcoinDAO</p>
        </div> */}
        {/* <div className="numbers-completed-container flex space-x-2">
          <ChartSquareBarIcon className="h-6 w-6" aria-hidden="true" />
          <p>
            {learningJourneyData.numberCompleted} people completed this learning
            journey
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SplashHeader;
