import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

import { classNames } from "../utils";
import { Team, teams } from "./teams";

interface Props {
  team: Team;
  setTeam: Dispatch<SetStateAction<Team>>;
}

const TeamSelect: FC<Props> = ({ team, setTeam }) => {
  return (
    <Listbox value={team} onChange={setTeam}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Select a team</Listbox.Label>
          <div className="relative mx-4 text-left">
            <div className="inline-flex divide-x divide-gray-400 rounded-md shadow-sm">
              <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-blue px-3 py-2 text-gray-100 shadow-sm">
                <p className="text-lg font-semibold">{teams[team].name}</p>
              </div>
              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-blue p-2 hover:bg-blue">
                <span className="sr-only">Change team</span>
                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </Listbox.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Object.entries(teams).map(([team, details]) => (
                  <Listbox.Option
                    key={team}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-blue text-white" : "text-gray-900",
                        "cursor-default select-none p-4 text-sm"
                      )
                    }
                    value={team}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? "font-bold" : "font-normal"}>
                            {details.name}
                          </p>
                          {selected ? (
                            <span className={active ? "text-white" : "text-blue"}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default TeamSelect;
