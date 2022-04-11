import { useEffect } from "react";
import { useRouter } from "next/router";
import { GET_USER, SUBSCRIBE_USER_LEARNING_MOMENTS } from "../../lib/graphql";
import { useQuery, useMutation } from "@apollo/client";
import ContentView from "../../templates/LearningJourney/ContentView";
import NavBar from "../../components/NavBar";

const LearningLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data, subscribeToMore } = useQuery(GET_USER);
  const user = data?.user_private[0];

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

  useEffect(() => {
    user && subscribeToLearningMoments();
  }, [user]);

  return (
    <div className="h-full bg-base-100">
      <NavBar />
      <div className="container max-w-4xl sm:p-12 mx-auto sm:px-4">
        <ContentView learningBitId={id} />
      </div>
    </div>
  );
};

export default LearningLandingPage;
