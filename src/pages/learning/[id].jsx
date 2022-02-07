import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Meta } from "../../layout/Meta.tsx";
import AppPageTwoColumn from "../../layout/AppPageTwoColumn";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Testimonial from "../../components/Testimonial";
import SplashHeader from "../../templates/LearningJourney/SplashHeader";
import Details from "../../templates/LearningJourney/Details";
import CurriculumSidebar from "../../templates/LearningJourney/CurriculumSidebar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GET_USERS, GET_LEARNING_JOURNEY } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import { GitcoinCurriculumData } from "../../mockData/GitcoinCurriculumData";
import ContentView from "../../templates/LearningJourney/ContentView";

const learningJourneyData = {
  id: "5cbc223b-57d2-439e-8744-f8b97bc455cd",
  title: "GitcoinDAO Onboarding",
  description: "Learn how to use GitcoinDAO",
  guide: "UUID",
  tokensOnCompletion: 100,
  updated_at: "2020-04-01T00:00:00.000Z",
  created_at: "2020-04-01T00:00:00.000Z",
  numberCompleted: 734,
};

const LearningLandingPage = () => {
  const router = useRouter();
  const { id, bit } = router.query;
  const [currentStep, setCurrentStep] = useState(1);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userLearningJourneyData, setUserLearningJourneyData] = useState(null);
  const { loading, error, data } = useQuery(GET_USERS);
  const {
    loading: loadingLearningJourneyData,
    error: errorGettingLearningJourney,
    data: learningJourneyDataArray,
  } = useQuery(GET_LEARNING_JOURNEY, {
    variables: { learningJourneyId: id },
  });
  const user = data?.users[0];
  const learningJourneyData = learningJourneyDataArray?.learningJourney[0];

  const checkIfUserHasStartedLevel = (
    learningJourneyId,
    userLearningJourneys
  ) => {
    userLearningJourneys.map((userLearningJourney) => {
      if (userLearningJourney.learningJourneyId === learningJourneyId) {
        setUserLearningJourneyData(userLearningJourney);
        setProgress(userLearningJourney.progress);
        return;
      }
    });
  };

  useEffect(() => {
    !loading && checkIfUserHasStartedLevel(id, user.learningJourneys);
  });

  useEffect(() => {
    if (bit) {
      setCurrentStep(bit);
      setStarted(true);
    }
  }, [bit]);

  const handleStart = () => {
    setStarted(true);
  };

  console.log(learningJourneyData);

  return (
    <div className="h-full">
      {!learningJourneyData ? (
        <Loading />
      ) : (
        <AppPageTwoColumn
          meta={
            <Meta
              title={learningJourneyData.title}
              description={learningJourneyData.description}
            />
          }
          leftColumn={
            loading ? (
              <Loading />
            ) : !started ? (
              <Fragment>
                <SplashHeader
                  user={user}
                  learningJourneyData={learningJourneyData}
                  userLearningJourneyData={userLearningJourneyData}
                  handleStart={handleStart}
                />
                <Details learningJourneyData={learningJourneyData} />
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
              </Fragment>
            ) : (
              <div>
                <ContentView
                  progress={progress}
                  curriculumData={GitcoinCurriculumData}
                  step={currentStep}
                />
              </div>
            )
          }
          rightColumn={
            <CurriculumSidebar
              curriculumData={GitcoinCurriculumData}
              progress={progress}
              started={started}
              step={currentStep}
              learningJourneyId={id}
            />
          }
        />
      )}
    </div>
  );
};

export default withPageAuthRequired(LearningLandingPage, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
