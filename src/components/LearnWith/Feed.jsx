const Feed = ({ learningMoments }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {learningMoments.map((learningMoment) => (
          <li key={learningMoment.id}>
            <div className="relative pb-8">
              <div className="relative flex items-start space-x-6">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full bg-gray-400 flex items-center justify-center"
                    src={learningMoment.user.avatar}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-lg">
                      <div className="font-medium text-primary">
                        {learningMoment.user.username}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-lg">
                    <p>{learningMoment.moment}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
