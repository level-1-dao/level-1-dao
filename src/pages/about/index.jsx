import NavBar, { Footer } from "../../components/NavBar";

const stats = [
  { label: "Founded", value: "During the DAO Global Hackathon 2021" },
  { label: "Maintainers", value: "3" },
  { label: "Level1s", value: "2" },
  { label: "Tokens Issued", value: "TBD" },
];

const people = [
  {
    name: "Ray Kanani",
    imageUrl:
      "https://lh3.googleusercontent.com/Kb8Oopt8JVxcB_ZdN1_jRJYG-mC4PYJdp473zRaoLZhaEjMFf6rVreS1WZxspdsuXqCeJP3oYBWtg7kzKoYpXyNyfx66jdb7G00iDB4=w600",
    bio: "Ray is a humxn that cares about the wellbeing of others. He spends his time thinking about how to create healing, compassioniate experiences that are accessible to all.",
  },
];

const values = [
  {
    name: "Safe",
    description:
      "In order for learning to occur, learners must feel safe to explore. This means creating low-stakes environments without worry of judgement, loss, or harm.",
  },
  {
    name: "Guided",
    description:
      "We learn better together. We prioritize opportunities for humxns to directly help each other over automated experiences.",
  },
  {
    name: "Playful",
    description:
      "Learn by doing is a great way for humxns to retain information. Level1 prioritizes interactive self-paced learning experiences.",
  },
  {
    name: "Observant",
    description:
      "Learners and guides give their most valued resource to Level1, their time. We work to witness and appreciate this at every point in the experience.",
  },
  {
    name: "Fresh",
    description:
      "The perspective and energy a beginners mind brings is what fuels the Level1 platform. We actively seek and value the beginner.",
  },
];

const index = () => {
  return (
    <div className="about-page">
      <NavBar />
      <div className="relative sm:py-4">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-primary font-extrabold tracking-tight sm:text-4xl">
                We believe communities will shape the next chapter of humxn
                prosperity.
              </h2>
              <div className="mt-6 text-base-content space-y-6">
                <p className="text-2xl">
                  Level1 allows communities to tap into the full potential of
                  their members by uncovering skills and providing a safer space
                  for members to use those skills to create value.
                </p>
                <p className="text-2xl">
                  Similar to when a player loads a new video game, Level1 is the
                  space that provides players with the confidence to navigate
                  new worlds, powers, roles, rewards and missions.
                </p>
              </div>
            </div>
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-base font-medium text-accent">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-base-content">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative sm:py-16 lg:py-0">
            {/* Values */}
            <div className="py-12 max-w-7xl lg:pt-24">
              <div className="space-y-4">
                <h2 className="text-2xl text-primary font-extrabold tracking-tight">
                  Our values
                </h2>
                <ul role="list" className="space-y-4">
                  {values.map((value) => (
                    <li key={value.name}>
                      <div className="space-y-4">
                        <div className="text-lg text-accent leading-6 font-medium space-y-1">
                          <h3>{value.name}</h3>
                        </div>
                        <div className="text-lg">
                          <p className="text-base-content">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Team */}
            <div className="space-y-12">
              <h2 className="text-2xl text-primary font-extrabold tracking-tight">
                Level1 Maintainers
              </h2>
              <ul role="list" className="space-y-12">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                      <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg text-accent leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                          </div>
                          <div className="text-lg">
                            <p className="text-base-content">{person.bio}</p>
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
      </div>
      <Footer />
    </div>
  );
};

export default index;
