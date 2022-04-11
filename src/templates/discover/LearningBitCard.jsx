const LearningBitCard = ({ learningBit }) => {
  return (
    <li className="relative cursor-pointer">
      <div className="card bg-base-100 hover:shadow-xl border-primary	border-2">
        <div className="card-body">
          {learningBit.learningJourney && (
            <div className="card-actions justify-start">
              <div className="badge badge-ghost">
                {learningBit.learningJourney?.title}
              </div>
            </div>
          )}
          <h2 className="card-title">{learningBit.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default LearningBitCard;
