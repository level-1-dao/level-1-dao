import { Image } from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";
import { MarkdownContent } from "../LearningJourney";

const GuideNotes = ({ guideNoteData }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-12 lg:gap-8">
        <div className="lg:col-span-2 mt-8">
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
                        src={guideNoteData.guide_info?.avatar}
                        alt="Guide's avatar"
                      />
                    </div>
                  </div>
                  <div className="guide-info flex space-y-2 items-center">
                    <div className="leading-6">
                      <h3 className="font-medium text-primary text-lg">
                        {guideNoteData.guide_info?.username}
                      </h3>
                      <p className="text-sm">{guideNoteData.role}</p>
                    </div>
                    {/* <button className="btn btn-xs btn-outline btn-accent">
                      Message
                      <ChatAltIcon className="ml-2 h-4 w-4" />
                    </button> */}
                    {/* <button className="btn btn-xs btn-outline btn-accent">
                        High Five
                        <HandIcon className="ml-2 h-4 w-4" />
                      </button> */}
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="space-y-4">
                    <div className="text-lg p-4 bg-primary rounded-lg">
                      <div className="text-accent-content">
                        <MarkdownContent content={guideNoteData.note} />
                      </div>
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
