/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";

const PopUp = ({
  open,
  setOpen,
  mintNft,
  awardTokens,
  minting,
  addingTokens,
  mintComplete,
  addTokensComplete,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-base-100 text-base-content rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-2xl leading-6 font-bold">
                  Congrats!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-lg">
                    You&#39;ve finished you&#39;re first Level1!
                  </p>
                  <br />
                  <p className="text-base">
                    You learned with 4 other people. Received 5 high fives and
                    gave out 8 high fives.
                  </p>
                </div>
                <div className="mt-12">
                  <p className="text-lg font-bold">
                    Along your journey, you collected
                  </p>
                  <div className="lg:grid p-6 lg:grid-cols-2 lg:items-start lg:gap-x-4 lg:gap-y-12 lg:space-y-0">
                    <div className="flex-col items-center justify-center">
                      <div className="mx-auto relative h-32 w-32">
                        <Image
                          src="/assets/images/Husky-First-NFT.png"
                          alt="NFT"
                          layout="fill"
                        />
                      </div>
                      <p className="text-lg">Helpful Husky NFT</p>
                    </div>
                    <div className="flex-col items-center justify-center">
                      <div className="mx-auto relative h-32 w-32">
                        <Image
                          src="/assets/images/L1-token.png"
                          alt="L1 Tokens"
                          layout="fill"
                        />
                      </div>
                      <p className="text-lg">90 Level1 Tokens</p>
                    </div>
                  </div>
                  <br />
                  <p className="text-base">
                    Let&#39;s mint your NFT and add your Level1 tokens to your
                    wallet.
                  </p>
                </div>
              </div>
              <div className="space-y-2 mt-5 sm:mt-6">
                <div className="alert alert-warning">
                  <div className="flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mx-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    <label>
                      Make sure your wallet is connected to the Rinkeby Test
                      Network for demo.
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className={
                    `btn btn-primary btn-outline btn-block` +
                    (addingTokens
                      ? " loading"
                      : addTokensComplete
                      ? " opacity-50 "
                      : "")
                  }
                  onClick={() => awardTokens()}
                  disabled={addTokensComplete}
                >
                  {addTokensComplete ? "Tokens Added" : "Add Tokens"}
                  {addTokensComplete && <CheckIcon className="h-6 w-6 ml-2" />}
                </button>
                <button
                  type="button"
                  className={
                    `btn btn-accent btn-outline btn-block` +
                    (minting ? " loading" : mintComplete ? " opacity-50 " : "")
                  }
                  onClick={() => mintNft()}
                  disabled={mintComplete}
                >
                  {mintComplete ? "Minted NFT" : "Mint NFT"}
                  {mintComplete && <CheckIcon className="h-6 w-6 ml-2" />}
                </button>
              </div>
              {addTokensComplete && (
                <div className="text-center mt-4">
                  <Link href="/discover">
                    <a className="text-info">Discover more Level1s</a>
                  </Link>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PopUp;
