import {useRouter} from 'next/router';
import Header from '../components/Header';

import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MarketingPage = () => {
  const router = useRouter();
  return (
    <div className="relative bg-base">
      <Header />

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-2/3 sm:px-8 xl:pr-16">
            <h1 className="text-6xl uppercase tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Activate community</span>{' '}
              <span className="text-accent">super powers</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-2xl md:mt-5 md:max-w-3xl">
              A fun and friendly learning and development platform designed for
              decentralized communities to tap into the full awesomeness of
              their membership.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/discover">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white btn-accent md:py-4 md:text-lg md:px-10">
                    Discover Level1s
                  </a>
                </Link>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Level1
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={`${router.basePath}/assets/images/cat_hero_bold.png`}
            alt=""
            layout="fill"
            priority
          />
        </div>
      </main>
    </div>
  );
};

export default MarketingPage;
