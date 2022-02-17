import dateFormat from "dateformat";

const LearningMomenContainer = ({ user, learningMoment }) => {
  return (
    <div className="mt-12 shadow-lg relative text-base max-w-md mx-auto lg:mt-0">
      <blockquote className="relative bg-base-100 rounded-lg shadow-lg">
        <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
          <div className="learner-info">
            <div className="md:flex md:justify-center">
              <div className="md:flex-shrink-0">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={user.user_details.avatar}
                  alt="user's avatar"
                />
              </div>
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900">
                  {user.user_details.username}
                </div>

                <svg
                  className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div className="text-base font-medium text-gray-500">
                  Reflection
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-2xl text-gray-700 font-medium mt-8">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">{learningMoment.moment}</p>
          </div>
        </div>
        <cite className="relative flex items-center gradient-background  rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
          <span className="relative text-indigo-300 font-semibold leading-6">
            <h3 className="text-base sm:text-lg text-indigo-50 font-bold">
              Your shared Learning Momement
            </h3>
            <p className="text-white font-semibold sm:inline">
              {user.username}
            </p>{" "}
            <p className="sm:inline">
              {dateFormat(learningMoment.created_at, "mmmm dS yyyy")}
            </p>
          </span>
        </cite>
      </blockquote>
    </div>
  );
};

export default LearningMomenContainer;
