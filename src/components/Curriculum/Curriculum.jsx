import {
  ClipboardListIcon,
  VideoCameraIcon,
  AnnotationIcon,
} from '@heroicons/react/solid';

const curriculum = [
  {
    id: 1,
    title:
      'Introduction: Get to know your instructor and the learning outcomes',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 150,
    link: 'https://link.to.curriculum',
  },
  {
    id: 2,
    title: 'Check-in: How are you feeling as we embark on this journey',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'quiz',
    time: 150,
    link: 'https://link.to.curriculum',
  },
  {
    id: 3,
    title: 'What are the key attributes of a DAO?',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 150,
    link: 'https://link.to.curriculum',
  },
  {
    id: 4,
    title: 'Breaking down the acronymn DAO',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 40,
    link: 'https://link.to.curriculum',
  },
  {
    id: 5,
    title: 'O is for Organization',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 150,
    link: 'https://link.to.curriculum',
  },
  {
    id: 6,
    title: 'D is for Decentralized',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'video',
    time: 150,
    link: 'https://link.to.curriculum',
  },
  {
    id: 7,
    title: 'Quick check-in: What are the key attributes of a DAO',
    description:
      'Get to know instructor and the journey you are going to go on',
    contentType: 'quiz',
    time: 150,
    link: 'https://link.to.curriculum',
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
            <div className="curriculum_title-runtime">
              <div className="curriculum__item-title text-lg font-bold">
                {item.title}
              </div>
              <div className="curriculum__item-time text-sm">{item.time}s</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
