import Navbar from '../../components/Navbar';

const stats = [
  {label: 'Founded', value: 'During the DAO Global Hackathon 2021'},
  {label: 'Core contributors', value: '2'},
  {label: 'Level1s', value: '1'},
  {label: 'Tokens Issued', value: '424'},
];

const index = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="relative sm:py-4">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-base-content font-extrabold tracking-tight sm:text-4xl">
                We believe communities will shape the next chapter of humxn
                prosperity.
              </h2>
              <div className="mt-6 text-base-content space-y-6">
                <p className="text-2xl">
                  We here to help communities tap into the full potential of
                  their members with tools that uncover member skills while
                  providing clear guidance in how to use those skills to advance
                  the mission of the community.
                </p>
                <p className="text-2xl">
                  Similar to when a player loads a new videogame, Level1 is the
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
                    <dt className="text-base font-medium text-gray-500">
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
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                  alt=""
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                      alt="Workcation"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Tincidunt integer commodo, cursus etiam aliquam neque,
                        et. Consectetur pretium in volutpat, diam. Montes, magna
                        cursus nulla feugiat dignissim id lobortis amet.
                      </p>
                    </div>
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">
                        Sarah Williams, CEO at Workcation
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
