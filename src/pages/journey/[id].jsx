import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Meta } from "../../layout/Meta.tsx";
import AppPageTwoColumn from "../../layout/AppPageTwoColumn";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import SplashHeader from "../../templates/LearningJourney/SplashHeader";
import Details from "../../templates/LearningJourney/Details";
import CurriculumSidebar from "../../templates/LearningJourney/CurriculumSidebar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  GET_USER,
  GET_LEARNING_JOURNEY,
  SUBSCRIBE_USER_LEARNING_MOMENTS,
} from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import ContentView from "../../templates/LearningJourney/ContentView";
import NavBar from "../../components/NavBar";

const LearningLandingPage = () => {
  const router = useRouter();
  const { id, bit } = router.query;
  const [currentBitId, setCurrentBitId] = useState(null);
  const [started, setStarted] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  let completedLearningBits = 0;
  const { loading, error, data, subscribeToMore } = useQuery(GET_USER);
  const { data: learningJourneyDataArray } = useQuery(GET_LEARNING_JOURNEY, {
    variables: { learningJourneyId: id },
  });
  const user = data?.user_private[0];
  const learningJourneyData = learningJourneyDataArray?.learningJourney[0];

  const subscribeToLearningMoments = () => {
    subscribeToMore({
      document: SUBSCRIBE_USER_LEARNING_MOMENTS,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newLearningMoment = subscriptionData.data.learningMoments;
        const userObject = Object.assign({}, prev, {
          user_private: [
            {
              ...prev.user_private[0],
              user_details: {
                ...prev.user_private[0].user_details,
                learningMoments: newLearningMoment,
              },
            },
          ],
        });
        return Object.assign({}, prev, {
          user_private: [
            {
              ...prev.user_private[0],
              user_details: {
                ...prev.user_private[0].user_details,
                learningMoments: newLearningMoment,
              },
            },
          ],
        });
      },
    });
  };

  const checkIfJourneyComplete = (user, learningBits) => {
    const userLearningMoments = user.user_details.learningMoments.filter(
      (learningMoment) => user.userId === learningMoment.userId
    );
    const userLearningMomentsIds = userLearningMoments.map(
      (learningMoment) => learningMoment.learningBitId
    );
    const userLearningBits = learningBits.filter(
      (learningBit) =>
        userLearningMomentsIds.includes(learningBit.id) &&
        learningBit.learningMomentId !== null
    );
    completedLearningBits = userLearningBits.length;
    console.log(completedLearningBits);
    if (completedLearningBits > 0) {
      setInProgress(true);
    }
    if (completedLearningBits === learningBits.length) {
      setCompleted(true);
      return;
    }
    return;
  };

  useEffect(() => {
    user &&
      learningJourneyData &&
      checkIfJourneyComplete(user, learningJourneyData?.learningBits);
  }, [user, learningJourneyData]);

  useEffect(() => {
    if (bit) {
      setCurrentBitId(bit);
      setStarted(true);
    } else {
      setStarted(false);
    }
  }, [bit]);

  useEffect(() => {
    subscribeToLearningMoments();
  }, []);

  const handleStart = () => {
    setStarted(true);
    if (learningJourneyData.learningBits[0]) {
      router.push(
        `/journey/${id}/?bit=${learningJourneyData.learningBits[0].id}`
      );
    }
  };

  return (
    <div className="h-full bg-base-100">
      <NavBar />
      {!learningJourneyData || !user ? (
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
                  handleStart={handleStart}
                  inProgress={inProgress}
                />
                <Details learningJourneyData={learningJourneyData} />
              </Fragment>
            ) : (
              <div>
                <ContentView learningBitId={bit} />
              </div>
            )
          }
          rightColumn={
            <CurriculumSidebar
              learningBits={learningJourneyData.learningBits}
              started={started}
              learningJourneyId={id}
              currentBit={currentBitId}
              user={user}
              learningJourneyName={learningJourneyData.title}
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
