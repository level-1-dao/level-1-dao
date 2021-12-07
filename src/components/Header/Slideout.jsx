import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {SparklesIcon} from '@heroicons/react/outline';

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

const Slideout = ({open, setOpen, walletConnected, connectWallet}) => {
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
                          Connect your wallet and you&apos;ll be able to collect
                          and store Level1 tokens AND store your exclusive super
                          cool completion NFTs.
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
                          <li key={wallet.name} onClick={() => connectWallet()}>
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
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Wallet address:
                          </p>
                          <h2 className="text-base font-medium text-gray-900 break-words">
                            <span className="sr-only">Wallet address </span>
                            0xF6f15f6007F0703b4013317A1ee80ad4040Cf98E
                          </h2>
                        </div>
                        <div className="h-40 w-40 overflow-hidden">
                          <img
                            src="/assets/images/coins.png"
                            alt="tokens image"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Tokens collected:
                          </h3>
                          <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Level1 Tokens</dt>
                              <dd className="text-gray-900">1,238</dd>
                            </div>
                            <div className="py-3 flex justify-between text-sm font-medium">
                              <dt className="text-gray-500">Completion NFTs</dt>
                              <dd className="text-gray-900">22</dd>
                            </div>
                          </dl>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Learned with
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
                            </li>
                          </ul>
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
