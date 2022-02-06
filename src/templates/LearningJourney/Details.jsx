import { GitcoinCurriculumDataOutcomes } from "../../mockData/GitcoinCurriculumData";

const Details = ({ learningJourneyData }) => {
  return (
    <div className="details my-4">
      <h2 className="text-xl font-bold">Overview</h2>
      <p className="text-lg">
        This Level1 module is designed to help you get started with GitcoinDAO.
        <br />
        <br />
      </p>
      After completing this Level1 you will:
      <ul className="list-disc list-inside">
        {GitcoinCurriculumDataOutcomes.map((outcome, i) => (
          <li key={i}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
