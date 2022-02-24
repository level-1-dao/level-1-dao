import { Image } from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";

const GuideNotes = ({ guideNoteData }) => {
  return (
    <div className="mx-auto">
      <div className="space-y-12 lg:gap-8">
        {/* <h2 className="text-3xl font-extrabold tracking-tight">Guide notes</h2> */}
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="sm:divide-y sm:divide-gray-200 sm:space-y-0"
          >
            <li>
              <div className="space-y-4">
                <div className="guide-info space-x-4 w-full flex">
                  <div className="avatar">
                    <div className="rounded-full w-16 h-16">
                      <img
                        src={guideNoteData.guide_info.avatar}
                        alt="Guide's avatar"
                      />
                    </div>
                  </div>
                  <div className="guide-info space-y-2 flex items-center w-full justify-between">
                    <div className="leading-6">
                      <h3 className="font-medium text-primary text-2xl">
                        {guideNoteData.guide_info.username}
                      </h3>
                      <p className="text-base">{guideNoteData.role}</p>
                    </div>
                    {/* <div className="guide-actions">
                      <button className="btn btn-lg btn-ghost">
                        <ChatAltIcon className="h-8 w-8" />
                      </button>
                    </div> */}
                  </div>
                </div>
                <div className="note p-4 bg-primary rounded-lg">
                  <div className="text-xl">
                    <p className="text-primary-content">{guideNoteData.note}</p>
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
