import Image from "next/image";

const Avatar = ({ guideId }) => {
  // Get guide info from API
  // Include loading state
  return (
    <div className="guide-container flex space-x-2">
      <div className="avatar">
        <div className="rounded-full w-14 h-14">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt="guide avatar"
            width={150}
            height={150}
            layout="responsive"
          />
        </div>
      </div>
      <div className="guide-text">
        <h5 className="text-sm">
          <span className="text-gray-500">Guide</span>
        </h5>
        <p className="text-lg">
          <span>Leslie Alexander</span>
        </p>
      </div>
    </div>
  );
};

export default Avatar;
