const StartButton = ({ handleStart, children }) => {
  const goToLevel = () => {
    handleStart();
  };

  return (
    <div className="start-level">
      <button className="btn btn-primary" onClick={() => goToLevel()}>
        <span className="text-sm">{children}</span>
      </button>
    </div>
  );
};

export default StartButton;
