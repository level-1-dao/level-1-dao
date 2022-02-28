import { Image } from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                        src={guideNoteData.guide_info?.avatar}
                        alt="Guide's avatar"
                      />
                    </div>
                  </div>
                  <div className="guide-info space-y-2">
                    <div className="leading-6">
                      <h3 className="font-medium text-primary text-lg">
                        {guideNoteData.guide_info?.username}
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
                    <div className="text-lg p-4 bg-primary rounded-lg">
                      <p className="text-accent-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {guideNoteData.note}
                        </ReactMarkdown>
                      </p>
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
