import Avatar from "../../components/Guide/Avatar";

const Guides = ({ learningBits }) => {
  const uniqueGuidesArray = [];
  learningBits.filter(function (item) {
    var i = uniqueGuidesArray.findIndex(
      (x) => x.userId == item.guideNotes.userId
    );
    if (i <= -1) {
      uniqueGuidesArray.push(item.guideNotes);
    }
    return null;
  });
  return (
    <div className="guide-container flex space-x-4">
      {uniqueGuidesArray.map((guide) => (
        <Avatar key={guide.id} guide={guide} />
      ))}
    </div>
  );
};

export default Guides;
