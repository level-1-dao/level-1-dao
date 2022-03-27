import { generateFromString } from "generate-avatar";

const GoodCompany = ({ learningMoments }) => {
  const learningMomentsCount = learningMoments ? learningMoments.length : 0;
  return (
    <div className="max-w-7xl">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <p className="text-xl text-gray-500">
            {learningMomentsCount > 0
              ? `${learningMomentsCount} amazing humxns have added their reflection`
              : "Be the first to add your reflection"}
          </p>
        </div>
        {learningMomentsCount > 0 && (
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {learningMoments.map((learningMoment, i) => {
              if (i > 6) return null;
              return (
                <li key={learningMoment.id}>
                  <div className="space-y-4 text-center">
                    <img
                      className="mx-auto h-16 w-16 rounded-full lg:w-22 lg:h-22"
                      src={
                        learningMoment.user_info.avatar !== undefined
                          ? learningMoment.user_info.avatar
                          : `data:image/svg+xml;utf8,${generateFromString(
                              learningMoment.user_info.username
                            )}`
                      }
                      alt="avatar"
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{learningMoment.user_info.username}</h3>
                        {/* <p className="text-accent cursor-pointer flex justify-center space-x-1">
                      <p>High Five</p>
                      <HandIcon className="h-5 w-5" />
                    </p> */}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GoodCompany;
