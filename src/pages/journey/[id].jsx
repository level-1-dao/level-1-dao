import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Meta } from "../../layout/Meta.tsx";
import AppPageTwoColumn from "../../layout/AppPageTwoColumn";
import Loading from "../../components/Loading";
import SplashHeader from "../../templates/LearningJourney/SplashHeader";
import Details from "../../templates/LearningJourney/Details";
import CurriculumSidebar from "../../templates/LearningJourney/CurriculumSidebar";
import {
  GET_USER,
  GET_LEARNING_JOURNEY,
  SUBSCRIBE_USER_LEARNING_MOMENTS,
} from "../../lib/graphql";
import { useQuery, useMutation } from "@apollo/client";
import ContentView from "../../templates/LearningJourney/ContentView";
import NavBar from "../../components/NavBar";

const LearningLandingPage = () => {
  const router = useRouter();
  const { id, bit } = router.query;
  const [currentBitId, setCurrentBitId] = useState(null);
  const [started, setStarted] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const { loading, error, data, subscribeToMore } = useQuery(GET_USER);
  const { data: learningJourneyDataArray } = useQuery(GET_LEARNING_JOURNEY, {
    variables: { learningJourneyId: id },
  });
  const user = data?.user_private[0];
  const learningJourneyData = learningJourneyDataArray?.learningJourney[0];

  const subscribeToLearningMoments = () => {
    subscribeToMore({
      document: SUBSCRIBE_USER_LEARNING_MOMENTS,
      variables: { userId: user?.userId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newLearningMoment = subscriptionData.data.learningMoments;
        return Object.assign({}, prev, {
          user_private: [
            {
              ...prev.user_private[0],
              user_learning_moments: newLearningMoment,
            },
          ],
        });
      },
    });
  };

  const checkIfJourneyInProgress = (user) => {
    const userLearningJourney = user.user_learning_journeys?.find(
      (learningJourney) => learningJourney.learningJourneyId === id
    );
    if (userLearningJourney) {
      console.log("user has started this journey");
      setInProgress(true);
    }
    return;
  };

  useEffect(() => {
    user && checkIfJourneyInProgress(user);
    user && subscribeToLearningMoments();
  }, [user]);

  useEffect(() => {
    if (bit && user) {
      setCurrentBitId(bit);
      setStarted(true);
    } else {
      setStarted(false);
    }
  }, [bit, user]);

  const handleStart = () => {
    setStarted(true);
    setInProgress(true);
    if (!user && learningJourneyData.learningBits[0]) {
      router.push(
        "/api/auth/login?returnTo=" +
          router.asPath +
          "/?bit=" +
          (bit || learningJourneyData.learningBits[0].id)
      );
    } else {
      router.push(
        `/journey/${id}/?bit=${bit || learningJourneyData.learningBits[0].id}`
      );
    }
  };

  return (
    <div className="h-full bg-base-100">
      <NavBar />
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
            !started ? (
              <Fragment>
                <SplashHeader
                  user={user ? user : null}
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
              nftMetaData={learningJourneyData.nft}
              started={started}
              inProgress={inProgress}
              learningJourneyId={id}
              currentBit={currentBitId}
              user={user ? user : null}
              learningJourneyName={learningJourneyData.title}
            />
          }
        />
      )}
    </div>
  );
};

export default LearningLandingPage;

// Leaving this here for reference if needed again
// export default withPageAuthRequired(LearningLandingPage, {
//   onRedirecting: () => <Loading />,
//   onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
// });
