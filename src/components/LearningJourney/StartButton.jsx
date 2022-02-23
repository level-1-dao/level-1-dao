const StartButton = ({ handleStart }) => {
  const goToLevel = () => {
    handleStart();
  };

  return (
    <div className="start-level">
      <button className="btn btn-primary" onClick={() => goToLevel()}>
        <span className="text-sm">Start this learning journey</span>
      </button>
    </div>
  );
};

export default StartButton;
