const Progress = ({ todo, completed }) => {
  return (
    <div className="flex hazy-candy-floss-background items-center rounded-lg text-secondary-content w-full border border-gray-400">
      <div className="p-4">
        <p className="text-base font-bold">
          Add a reflection to each learning bit to unlock completion NFTs
        </p>
        <progress
          className="progress progress-primary w-56"
          value={completed}
          max={todo}
        ></progress>
      </div>
    </div>
  );
};

export default Progress;
