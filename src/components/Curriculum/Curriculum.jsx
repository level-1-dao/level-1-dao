import {
  ClipboardListIcon,
  VideoCameraIcon,
  LinkIcon,
  CashIcon,
} from '@heroicons/react/solid';

const convertToMinutes = (time) => {
  if (time === 0) {
    return '0 min';
  }
  if (typeof time === 'string') {
    return time;
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
};

const Curriculum = ({curriculum, active}) => {
  return (
    <div className="curriculum w-full">
      <h2 className="text-xl mb-4">Learning content:</h2>
      <div className="curriculum__list space-y-2">
        {curriculum.map((item) => (
          <div
            key={item.id}
            className={`curriculum__item flex space-x-4 p-4 rounded items-center ${
              active === item.id ? 'bg-accent text-accent-content' : ''
            }`}
          >
            <div className="curriculum_id">{item.id}</div>
            <div className="curriculum__content-type">
              {item.contentType === 'video' ? (
                <VideoCameraIcon className="w-6 h-6" />
              ) : item.contentType === 'quiz' ? (
                <ClipboardListIcon className="w-6 h-6" />
              ) : (
                <LinkIcon className="w-6 h-6" />
              )}
            </div>
            <div className="curriculum_title-runtime w-full">
              <div className="curriculum__item-title text-lg font-bold">
                {item.title}
              </div>
              <div className="time-tokens-container flex">
                <div className="curriculum__item-time text-sm flex-grow">
                  {convertToMinutes(item.time)}
                </div>
                <div className="justify-end">
                  <div
                    className={`badge ${
                      active !== item.id ? 'badge-info' : ''
                    }`}
                  >
                    <CashIcon className="h-4 w-4 mr-1" />
                    {item.tokens}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
