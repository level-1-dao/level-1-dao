import { Image } from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";

const people = [
  {
    name: "Leslie Alexander",
    role: "Gitcoin Community Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const GuideNotes = ({ guideNoteData }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-12 lg:gap-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Guide notes</h2>
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-6 lg:gap-x-8 lg:space-y-0"
          >
            <li>
              <div className="space-y-2">
                <div className="image-container space-x-4 mb-4 max-w-xs flex">
                  <div className="avatar">
                    <div className="rounded-full w-20 h-20">
                      <img
                        src={guideNoteData.user?.avatar}
                        alt="Guide's avatar"
                      />
                    </div>
                  </div>
                  <div className="guide-info space-y-2">
                    <div className="leading-6">
                      <h3 className="font-medium text-primary text-lg">
                        {guideNoteData.user?.username}
                      </h3>
                      <p className="text-sm">{guideNoteData.role}</p>
                    </div>
                    <button className="btn btn-xs btn-outline btn-accent">
                      Message
                      <ChatAltIcon className="ml-2 h-4 w-4" />
                    </button>
                    {/* <button className="btn btn-xs btn-outline btn-accent">
                        High Five
                        <HandIcon className="ml-2 h-4 w-4" />
                      </button> */}
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="space-y-4">
                    <div className="text-xl">
                      <p className="">{guideNoteData.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideNotes;
