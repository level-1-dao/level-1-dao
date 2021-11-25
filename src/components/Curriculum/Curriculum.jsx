import {
  ClipboardListIcon,
  VideoCameraIcon,
  AnnotationIcon,
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

const curriculum = [
  {
    id: 1,
    title:
      'Introduction: Get to know your instructor and the learning outcomes',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 120,
    link: 'https://link.to.curriculum',
    tokens: 10,
  },
  {
    id: 2,
    title: 'Check-in: How are you feeling as we embark on this journey',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'quiz',
    time: '--',
    link: 'https://link.to.curriculum',
    tokens: 10,
  },
  {
    id: 3,
    title: 'What are the key attributes of a DAO?',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 330,
    link: 'https://link.to.curriculum',
    tokens: 5,
  },
  {
    id: 4,
    title: 'Breaking down the acronymn DAO',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 60,
    link: 'https://link.to.curriculum',
    tokens: 5,
  },
  {
    id: 5,
    title: 'O is for Organization',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 120,
    link: 'https://link.to.curriculum',
    tokens: 20,
  },
  {
    id: 6,
    title: 'D is for Decentralized',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 300,
    link: 'https://link.to.curriculum',
    tokens: 20,
  },
  {
    id: 7,
    title: 'Quick check-in: What are the key attributes of a DAO',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'quiz',
    time: '--',
    link: 'https://link.to.curriculum',
    tokens: 10,
  },
  {
    id: 8,
    title: 'Byzantine Generals Problem',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 520,
    link: 'https://link.to.curriculum',
    tokens: 10,
  },
  {
    id: 9,
    title: 'A is for Autonomous',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 300,
    link: 'https://link.to.curriculum',
    tokens: 20,
  },
  {
    id: 10,
    title: 'Review: Wrap it up in a bow',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'quiz',
    time: 400,
    link: 'https://link.to.curriculum',
    tokens: 'payout',
  },
];

const Curriculum = () => {
  return (
    <div className="curriculum w-full">
      <h2 className="text-xl mb-4">Learning content:</h2>
      <div className="curriculum__list space-y-8">
        {curriculum.map((item) => (
          <div
            key={item.id}
            className="curriculum__item flex space-x-4 items-center"
          >
            <div className="curriculum_id">{item.id}</div>
            <div className="curriculum__content-type">
              {item.contentType === 'video' ? (
                <VideoCameraIcon className="w-6 h-6" />
              ) : item.contentType === 'quiz' ? (
                <ClipboardListIcon className="w-6 h-6" />
              ) : (
                <AnnotationIcon className="w-6 h-6" />
              )}
            </div>
            <div className="curriculum_title-runtime w-full">
              <div className="curriculum__item-title text-lg font-bold">
                {item.title}
              </div>
              <div className="time-tokens-container flex">
                <div className="curriculum__item-time text-sm flex-grow">{convertToMinutes(item.time)}</div>
                <div className="justify-end">
                  <div className="badge badge-info">
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
