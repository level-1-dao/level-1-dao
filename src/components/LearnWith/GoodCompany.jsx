import {HandIcon} from '@heroicons/react/outline';
import LearningWithData from '../../mockData/LearningWithData';
import {generateFromString} from 'generate-avatar';

const GoodCompany = () => {
  return (
    <div className="max-w-7xl">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight">
            You&#39;re in good company
          </h2>
          <p className="text-xl text-gray-500">
            123 amazing humxns have learned with you in the past 48 hours. Use
            this knowledge to ask questions, share reflections, learn from each
            other.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
        >
          {LearningWithData.map((person) => (
            <li key={person.name}>
              <div className="space-y-4 text-center">
                <img
                  className="mx-auto h-16 w-16 rounded-full lg:w-22 lg:h-22"
                  src={
                    person.imageUrl !== undefined
                      ? person.imageUrl
                      : `data:image/svg+xml;utf8,${generateFromString(
                          person.name
                        )}`
                  }
                  alt="avatar"
                />
                <div className="space-y-2">
                  <div className="text-xs font-medium lg:text-sm">
                    <h3>{person.name}</h3>
                    <p className="text-accent cursor-pointer flex justify-center space-x-1">
                      <p>High Five</p>
                      <HandIcon className="h-5 w-5" />
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoodCompany;
