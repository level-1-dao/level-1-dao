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
        <li>Have an understanding of the values & mission of GitcoinDAO</li>
        <li>Have an understanding of how they can earn with GitcoinDAO</li>
        <li>
          Have an understanding of how to find opportunities and apply to them
        </li>
        <li>Have key contacts to go to for help & other questions</li>
        <li>Have proper access & permissions to get started</li>
      </ul>
    </div>
  );
};

export default Details;
