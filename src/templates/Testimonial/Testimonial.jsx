const Testimonial = () => {
  return (
    <section className="card bordered">
      <div className="p-8 max-w-2sm mx-auto">
        <blockquote className="md:flex-grow md:flex md:flex-col">
          <header className="mb-8">
            <div className="flex items-start">
              <div className="avatar">
                <div className="rounded-full w-10 h-10 ring ring-gray-400 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">Judith Black</div>
                <div className="text-sm font-medium text-indigo-200">
                  CEO, Tuple
                </div>
              </div>
            </div>
          </header>
          <div className="relative text-lg font-medium md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              Great lesson. Thank you for the simple and clear explanation on
              what a DAO is.
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
