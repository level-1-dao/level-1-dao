import { useRouter } from 'next/router';
import Header from '../components/Header';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MarketingPage = () => {
  const router = useRouter();
  return (
    <div className="relative bg-gray-50">
      <Header />

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-2/3 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Give DAO members</span>{' '}
              <span className="block text-primary">super powers</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Level1 is a fun and friendly onboarding platform for Decentralized
              Autonomous Organizations (DAOs).
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white btn-primary md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`${router.basePath}/assets/images/cat_hero_bold.png`}
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default MarketingPage;
