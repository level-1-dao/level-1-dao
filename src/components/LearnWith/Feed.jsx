import {Fragment} from 'react';
import {ChatAltIcon, TagIcon, UserCircleIcon} from '@heroicons/react/solid';

const activity = [
  {
    id: 1,
    type: 'comment',
    person: {name: 'Eduardo Benz', href: '#'},
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
    tag: 'reflection',
  },
  {
    id: 2,
    type: 'comment',
    person: {name: 'Jason Meyers', href: '#'},
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
    tag: 'reflection',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Feed = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                    src={activityItem.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text">
                      <a
                        href={activityItem.person.href}
                        className="font-medium text-gray-900"
                      >
                        {activityItem.person.name}
                      </a>
                    </div>
                    <p className="mt-0.5 text text-gray-500">
                      Shared {activityItem.tag}
                    </p>
                  </div>
                  <div className="mt-2 text-lg">
                    <p>{activityItem.comment}</p>
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
