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
import { GET_USERS, GET_LEARNING_JOURNEY } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import ContentView from "../../templates/LearningJourney/ContentView";

const LearningLandingPage = () => {
  const router = useRouter();
  const { id, bit } = router.query;
  const [currentBitId, setCurrentBitId] = useState(null);
  const [started, setStarted] = useState(false);
  const [userLearningJourneyData, setUserLearningJourneyData] = useState(null);
  const { loading, error, data } = useQuery(GET_USERS);
  const { data: learningJourneyDataArray } = useQuery(GET_LEARNING_JOURNEY, {
    variables: { learningJourneyId: id },
  });
  const user = data?.users[0];
  const learningJourneyData = learningJourneyDataArray?.learningJourney[0];

  useEffect(() => {
    if (bit) {
      setCurrentBitId(bit);
      setStarted(true);
    } else {
      setStarted(false);
    }
  }, [bit]);

  const handleStart = () => {
    setStarted(true);
    if (learningJourneyData.learningBits[0]) {
      router.push(
        `/journey/${id}/?bit=${learningJourneyData.learningBits[0].id}`
      );
    }
  };

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
