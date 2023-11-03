import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const languages = [
  { id: 1, name: 'Java' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'C++' },
];

export default function LanguageSelectionWrapper() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const name = selectedLanguage.name;
    console.log(name);
    localStorage.setItem('selectedLanguage', name);
  }, [selectedLanguage]);

  return (
    <div className="relative px-5 z-10">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border py-2 text-gray-500 text-xl focus:outline-none focus-visible:border-theme focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate flex items-center justify-between px-2">
              <span className="block truncate">{selectedLanguage.name}</span>
              <ChevronDownIcon className="h-5 w-5 ml-2" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white text-gray-500 py-1 text-base shadow-lg ring-1 ring-gray-200 ring-opacity-80 focus:outline-none sm:text-sm">
              {languages.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-100' : ''
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <span className="block truncate flex items-center justify-between px-2">
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      ) : null}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
