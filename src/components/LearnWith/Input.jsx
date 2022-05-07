import { useState, useEffect } from "react";
import { useMutation } from "../../lib/apollo";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LearningMomentContainer from "./LearningMomentContainer";
import {
  ADD_LEARNING_MOMENT,
  GET_USER,
  SUBSCRIBE_USER_LEARNING_MOMENTS,
} from "../../lib/graphql";
import { POAP } from "../NFT";

const Input = ({ learningBitId, learningPromptId, promptType }) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [learningMoment, setLearningMoment] = useState(null);
  const { loading, error, data, subscribeToMore } = useQuery(GET_USER);
  const user = data?.user_private[0];

  const handleLogIn = () => {
    router.push("/api/auth/login?returnTo=" + router.asPath);
  };

  useEffect(() => {
    if (user) {
      checkForUsersLearningMoment(user, learningBitId, learningPromptId);
    }
  }, [user, learningBitId]);

  useEffect(() => {
    user && subscribeToLearningMoments();
  }, [user]);

  const subscribeToLearningMoments = () => {
    subscribeToMore({
      document: SUBSCRIBE_USER_LEARNING_MOMENTS,
      variables: { userId: user?.userId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newLearningMoment = subscriptionData.data.learningMoments;
        // use this to check against old and new object
        // const userObject = Object.assign({}, prev, {
        //   user_private: [
        //     {
        //       ...prev.user_private[0],
        //       user_details: {
        //         ...prev.user_private[0].user_details,
        //       },
        //       user_learning_moments: newLearningMoment,
        //     },
        //   ],
        // });
        // console.log("new userObject", userObject);
        return Object.assign({}, prev, {
          user_private: [
            {
              ...prev.user_private[0],
              user_details: {
                ...prev.user_private[0].user_details,
              },
              user_learning_moments: newLearningMoment,
            },
          ],
        });
      },
    });
  };

  const {
    load: addLearningMoment,
    loading: addLearningMomentLoading,
    error: addLearningMomentError,
  } = useMutation(ADD_LEARNING_MOMENT, {
    onCompleted: (data) => {
      // TODO - show alert/toast
      console.log("Learning moment saved ", data);
      checkForUsersLearningMoment(user, learningBitId, learningPromptId);
      setValue("");
      return;
    },
    onError: (errorContinueLevel) => {
      // TODO - show alert/toast
      console.log("Learning moment save error :(", errorContinueLevel);
      return;
    },
  });

  const checkForUsersLearningMoment = (
    user,
    learningBitId,
    learningPromptId
  ) => {
    let userLearningMoment;
    console.log(user.user_learning_moments);
    if (learningPromptId) {
      userLearningMoment = user.user_learning_moments.find(
        (learningMoment) => learningMoment.promptId === learningPromptId
      );
    } else {
      userLearningMoment = user.user_learning_moments.find(
        (learningMoment) => learningMoment.learningBitId === learningBitId
      );
    }
    if (userLearningMoment) {
      setLearningMoment(userLearningMoment);
    } else {
      setLearningMoment(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      handleLogIn();
      return;
    }
    addLearningMoment({
      variables: {
        userId: user.userId,
        learningBitId: learningBitId,
        moment: value,
        type: promptType ? promptType : "reflection",
        promptId: learningPromptId ? learningPromptId : null,
      },
    });
    return;
  };

  return (
    <>
      {learningMoment ? (
        <>
          <LearningMomentContainer
            user={user}
            learningMoment={learningMoment}
          />
          {learningMoment.poap[0] && <POAP poap={learningMoment.poap} />}
        </>
      ) : (
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div className="bg-base-100 relative text-xl border border-gray-300 rounded-lg shadow-sm overflow-hidden group focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <div className="p-6">
              <label htmlFor="description" className="sr-only">
                Learning moment input
              </label>
              <textarea
                rows={2}
                name="description"
                id="description"
                className="textarea textarea-ghost w-full text-xl"
                placeholder="Add your reflection..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!user}
              />
            </div>

            <div className="bottom-0 inset-x-px">
              <div className="border-t border-gray-200 px-2 py-3 flex items-center justify-end space-x-3 sm:px-3 group-focus-within:border-indigo-500 group-focus-within:ring-1 group-focus-within:ring-indigo-500">
                <div className="">
                  {!loading && user ? (
                    <button
                      type="submit"
                      className={`btn btn-primary btn-md ${
                        addLearningMomentLoading && "loading"
                      }`}
                    >
                      {!addLearningMomentLoading
                        ? "Add reflection"
                        : "Adding..."}
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary btn-md">
                      Log-in to add reflection
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Input;
