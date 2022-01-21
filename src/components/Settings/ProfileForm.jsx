import { useState } from "react";
import Image from "next/image";
import { useMutation } from "../../lib/apollo";
import { UPDATE_SETTINGS } from "../../lib/graphql";

const ProfileForm = ({ user }) => {
  const [newsletter, setNewsletter] = useState(user.newsletter || false);
  const [journeyUpdates, setJourneyUpdates] = useState(
    user.journeyUpdates || false
  );
  const [walletAddress, setWalletAddress] = useState(user.connectedWalletAddress || "");
  const [username, setUsername] = useState(user.username || "");

  const {
    load: updateSettings,
    loading,
    error,
  } = useMutation(UPDATE_SETTINGS, {
    onCompleted: (data) => {
      // TODO - show alert/toast
      console.log("update setting ", data);
      return;
    },
    onError: (error) => {
      // TODO - show alert/toast
      console.log("update setting error", error);
      return;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings({
      variables: {
        id: user.id,
        newsletter: newsletter,
        journeyUpdates: journeyUpdates,
        connectedWalletAddress: walletAddress,
        username: username,
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-2xl leading-6 font-medium text-primary">
          Your Level1 Profile Information
        </h3>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 form-control">
        <div className="sm:col-span-6">
          <label htmlFor="avatar" className="block font-medium mb-2">
            Avatar
          </label>
          <div className="avatar">
            <div className="mb-8 rounded-full w-24 h-24">
              <Image
                src={user.avatar}
                alt="NFT"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="username" className="block font-medium mb-2">
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="input input-bordered w-full"
              onChange={(e) => setUsername(e.target.value)}
              disabled
              value={username}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block font-medium mb-2">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="input input-bordered w-full"
              disabled
              value={user.email}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block font-medium mb-2">
            Country
          </label>
          <div className="mt-1">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="select select-bordered w-full max-w-xs"
              disabled
              value={user.country}
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="street-address" className="block font-medium mb-4">
            Linked wallet address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="input input-bordered w-full"
              onChange={(e) => setWalletAddress(e.target.value)}
              disabled
              value={walletAddress}
            />
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div>
          <h3 className="text-lg leading-6 font-medium text-primary">
            Notifications
          </h3>
          <p className="mt-1  ">
            Your space is yours to create. You can change these settings at any
            time.
          </p>
        </div>
        <div className="mt-6">
          <fieldset>
            <legend className="text-base font-medium text-accent">
              Email messages
            </legend>
            <div className="mt-4 space-y-4">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 ">
                  <label htmlFor="newsletter" className="font-medium">
                    Weekly newsletter
                  </label>
                  <p className="">
                    This is a weekly update on the Level1 project. It can also
                    be found on Discord channel [link]
                  </p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="journey-updates"
                    name="journey-updates"
                    type="checkbox"
                    checked={journeyUpdates}
                    onChange={(e) => setJourneyUpdates(e.target.checked)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 ">
                  <label htmlFor="journey-updates" className="font-medium ">
                    Learning journey updates
                  </label>
                  <p className="">
                    Guide updates from Level1 learning journeys you&#39;ve
                    participated in.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 btn btn-primary"
            disabled={loading}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
