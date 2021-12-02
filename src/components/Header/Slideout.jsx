import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {
  SparklesIcon,
  PlusSmIcon,
  HeartIcon,
  PencilIcon,
} from '@heroicons/react/outline';

const wallets = [
  {
    name: 'Metamask',
    imageUrl: 'https://opensea.io/static/images/logos/metamask-alternative.png',
  },
  {
    name: 'Coinbase Wallet',
    imageUrl:
      'https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png',
  },
  {
    name: 'Wallet Connect',
    imageUrl:
      'https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png',
  },
  {
    name: 'Formatic',
    imageUrl:
      'https://storage.googleapis.com/opensea-static/logos/fortmatic-alternative.png',
  },
];

const Slideout = ({open, setOpen, walletConnected}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 mt-16 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  {!walletConnected && (
                    <div className="py-6 px-4 bg-primary text-primary-content sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg flex font-medium text-white">
                          <SparklesIcon className="w-6 h-6 mr-2" />
                          Collect Level1 Tokens While You Learn
                        </Dialog.Title>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm">
                          Connect your wallet and you'll be able to collect and
                          store Level1 tokens AND you'll be able to store your
                          exclusive super cool completion NFTs.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="relative flex-1 py-6 px-4 sm:px-6">
                    {!walletConnected ? (
                      <ul
                        role="list"
                        className="flex-1 divide-y divide-gray-200 overflow-y-auto"
                      >
                        {wallets.map((wallet) => (
                          <li key={wallet.name}>
                            <div className="relative group py-6 px-5 flex items-center cursor-pointer">
                              <div
                                className="absolute inset-0 group-hover:bg-gray-50"
                                aria-hidden="true"
                              />
                              <div className="flex-1 flex items-center min-w-0 relative">
                                <span className="flex-shrink-0 inline-block relative">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={wallet.imageUrl}
                                    alt=""
                                  />
                                </span>
                                <div className="ml-4 truncate">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {wallet.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="pb-16 space-y-6">
                        <div>
                          <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                              alt=""
                              className="object-cover"
                            />
                          </div>
                          <div className="mt-4 flex items-start justify-between">
                            <div>
                              <h2 className="text-lg font-medium text-gray-900">
                                <span className="sr-only">Details for </span>
                                IMG_4985.HEIC
                              </h2>
                              <p className="text-sm font-medium text-gray-500">
                                3.9 MB
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-4 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <HeartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Favorite</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Information
                          </h3>
                          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Uploaded by</dt>
                              <dd className="text-gray-900">Marie Culver</dd>
                            </div>
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Created</dt>
                              <dd className="text-gray-900">June 8, 2020</dd>
                            </div>
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Last modified</dt>
                              <dd className="text-gray-900">June 8, 2020</dd>
                            </div>
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Dimensions</dt>
                              <dd className="text-gray-900">4032 x 3024</dd>
                            </div>
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Resolution</dt>
                              <dd className="text-gray-900">72 x 72</dd>
                            </div>
                          </dl>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Description
                          </h3>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-gray-500 italic">
                              Add a description to this image.
                            </p>
                            <button
                              type="button"
                              className="-mr-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <PencilIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Add description</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Shared with
                          </h3>
                          <ul
                            role="list"
                            className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                          >
                            <li className="py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <img
                                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                                  alt=""
                                  className="w-8 h-8 rounded-full"
                                />
                                <p className="ml-4 text-sm font-medium text-gray-900">
                                  Aimee Douglas
                                </p>
                              </div>
                              <button
                                type="button"
                                className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Remove
                                <span className="sr-only"> Aimee Douglas</span>
                              </button>
                            </li>
                            <li className="py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <img
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                  className="w-8 h-8 rounded-full"
                                />
                                <p className="ml-4 text-sm font-medium text-gray-900">
                                  Andrea McMillan
                                </p>
                              </div>
                              <button
                                type="button"
                                className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Remove
                                <span className="sr-only">
                                  {' '}
                                  Andrea McMillan
                                </span>
                              </button>
                            </li>
                            <li className="py-2 flex justify-between items-center">
                              <button
                                type="button"
                                className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                                  Share
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Download
                          </button>
                          <button
                            type="button"
                            className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Slideout;
