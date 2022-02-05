import { ChatAltIcon, HandIcon } from "@heroicons/react/outline";

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

const GuideNotes = ({ notes }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-12 lg:gap-8">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Notes from your guide
        </h2>
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-6 lg:gap-x-8 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="sm:grid sm:grid-cols-5 sm:items-start sm:gap-6 sm:space-y-2">
                  <div className="image-container space-y-2 mb-4 sm:col-span-1 grid-cols-2 gap-2 max-w-xs flex sm:flex-col">
                    <div className="avatar col-span-1">
                      <div className="rounded-full w-24 h-24">
                        <img src={person.imageUrl} alt="Guide's avatar" />
                      </div>
                    </div>
                    <div className="guide-info col-span-1 space-y-2">
                      <div className="leading-6">
                        <h3 className="font-medium text-primary text-lg">
                          {person.name}
                        </h3>
                        <p className="text">{person.role}</p>
                      </div>
                      <button className="btn btn-xs btn-outline btn-accent">
                        Message
                        <ChatAltIcon className="ml-2 h-4 w-4" />
                      </button>
                      <button className="btn btn-xs btn-outline btn-accent">
                        High Five
                        <HandIcon className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="space-y-4">
                      <div className="text-xl">
                        <p className="">{notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideNotes;
