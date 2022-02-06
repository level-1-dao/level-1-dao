import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { PaperClipIcon, TagIcon } from "@heroicons/react/solid";

const labels = [
  { name: "Reflection", value: "reflection" },
  { name: "Now I know", value: "nowIKnow" },
  { name: "Wish I knew", value: "question" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Input = () => {
  const [labelled, setLabelled] = useState(labels[0]);

  return (
    <form action="#" className="space-y-8">
      <h2 className="text-3xl font-extrabold tracking-tight">
        Learning moment
      </h2>
      <div className="relative text-xl border border-gray-300 rounded-lg shadow-sm overflow-hidden group focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <div className="p-6">
          <label htmlFor="description" className="sr-only">
            Learning moment input
          </label>
          <textarea
            rows={2}
            name="description"
            id="description"
            className="textarea textarea-ghost w-full text-xl"
            placeholder="I learned..."
            defaultValue={""}
          />
        </div>

        <div className="bottom-0 inset-x-px">
          <div className="border-t border-gray-200 px-2 py-3 flex items-center justify-end space-x-3 sm:px-3 group-focus-within:border-indigo-500 group-focus-within:ring-1 group-focus-within:ring-indigo-500">
            <div className="">
              <button type="submit" className="btn btn-primary btn-md">
                Mint your learning moment
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Input;
