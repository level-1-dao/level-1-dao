import dateFormat from "dateformat";

const LearningMomenContainer = ({ user, learningMoment }) => {
  const mouseMove = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="relative mt-12 shadow-lg hazy-candy-floss-background rounded-xl relative text-base max-w-md mx-auto lg:mt-0 border border-gray-300">
        <div className="absolute hazy-candy-floss-background duration-1000 -inset-1 transitiona-all opacity-70 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
        <div className="relative rounded-lg shadow-lg">
          <div className="rounded p-6 bg-base-100 m-2 mb-0">
            <div className="learner-info">
              <div className="md:flex md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={user.user_details.avatar}
                    alt="user's avatar"
                  />
                </div>
                <div className="text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-base-content">
                    {user.user_details.username}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-2xl font-medium flex-column justify-content-center py-8">
              <p className="relative text-base-content text-center">
                {learningMoment.moment}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 text-center">
            <span className="relative text-indigo-400 font-semibold leading-6 background-mask">
              <h3 className="text-base sm:text-lg text-indigo-50 font-bold">
                Learning Reflection
              </h3>
              <p className="text-white font-semibold sm:inline">
                {user.username}
              </p>{" "}
              <p className="sm:inline">
                {dateFormat(learningMoment.created_at, "mmmm dS yyyy")}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningMomenContainer;
