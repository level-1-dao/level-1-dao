import {Fragment, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {PaperClipIcon, TagIcon} from '@heroicons/react/solid';

const labels = [
  {name: '💭 Reflection', value: 'reflection'},
  {name: '💡 Now I know', value: 'nowIKnow'},
  {name: '🤔 Wish I knew', value: 'question'},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Input = () => {
  const [labelled, setLabelled] = useState(labels[0]);

  return (
    <form action="#" className="relative">
      <div className="p-6 text-xl border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="description" className="sr-only">
          Reflection
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0"
          placeholder="Share a reflection with others..."
          defaultValue={''}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
          <Listbox
            as="div"
            value={labelled}
            onChange={setLabelled}
            className="flex-shrink-0"
          >
            {({open}) => (
              <>
                <Listbox.Label className="sr-only">Add a label</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3">
                    <TagIcon
                      className={classNames(
                        labelled.value === null
                          ? 'text-gray-300'
                          : 'text-gray-500',
                        'flex-shrink-0 h-5 w-5 sm:-ml-1'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        labelled.value === null ? '' : 'text-gray-900',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      {labelled.value === null ? 'Label' : labelled.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {labels.map((label) => (
                        <Listbox.Option
                          key={label.value}
                          className={({active}) =>
                            classNames(
                              active ? 'bg-gray-100' : 'bg-white',
                              'cursor-default select-none relative py-2 px-3'
                            )
                          }
                          value={label}
                        >
                          <div className="flex items-center">
                            <span className="block font-medium truncate">
                              {label.name}
                            </span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div className="border-t border-gray-200 px-2 py-2 flex items-center justify-end space-x-3 sm:px-3">
          <div className="">
            <button type="submit" className="btn btn-primary btn-md">
              Share
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Input;
