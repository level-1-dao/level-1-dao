const Details = ({ learningJourneyData }) => {
  return (
    <div className="details my-4">
      <h2 className="text-xl font-bold">Overview</h2>
      <p className="text-lg">
        {learningJourneyData.fullDescription}
        <br />
        <br />
      </p>
      After completing this Level1 you will:
      <ul className="list-disc list-inside">
        {learningJourneyData.learningOutcomes.map((outcome, i) => (
          <li key={i}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
