import NavBar from '../../components/NavBar';

const stats = [
  {label: 'Founded', value: 'During the DAO Global Hackathon 2021'},
  {label: 'Core contributors', value: '2'},
  {label: 'Level1s', value: '1'},
  {label: 'Tokens Issued', value: '424'},
];

const people = [
  {
    name: 'Adam Jackson',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Ray Kanani',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
];

const values = [
  {
    name: 'Safe',
    description:
      'In order for learning to occur, learners must feel safe to explore. This means creating low-stakes environments without worry of judgement, loss, or harm.',
  },
  {
    name: 'Guided',
    description:
      'We learn better together. We priortize opportunities for humxns to directly help each other over coded experiences.',
  },
  {
    name: 'Play-based',
    description:
      'Learn by doing is a great way for humxns to retain information. Level1s all have interactive learning experiences.',
  },
  {
    name: 'Recognition',
    description:
      'Learners, guides and content creators give their most valued resource to us, time. We recognize this at every step. Level1 issues L1 tokens to all those that contribue their time to the learning network.',
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
                Team
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
    </div>
  );
};

export default index;
