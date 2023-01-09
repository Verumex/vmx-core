import React, { FC, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash/shuffle";
import { RefreshIcon } from "@heroicons/react/outline";

import { team, Member } from "./team";
import Confetti from "./Confetti";
import { classNames } from "../utils";
import BigTimer from "./BigTimer";

const timeInMinutes = 3;

const Standup: FC = () => {
  const [items, setItems] = useState<Member[]>(team);
  const [activeMember, setActiveMember] = useState<Member | undefined>();
  const [isShuffled, setIsShuffled] = useState(false);
  const [isConfettiOn, setIsConfettiOn] = useState(false);

  let width = 0;

  const transitions = useTransition(
    items.map((item) => ({
      ...item,
      x: (width += item.cardWidth) - item.cardWidth,
    })),
    {
      key: (item: Member) => item.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: (item) => ({ x: item.x, width: item.cardWidth, opacity: 1 }),
      update: (item) => ({ x: item.x, width: item.cardWidth }),
    }
  );

  const shuffleItems = () => {
    setItems(shuffle);
    setIsShuffled(true);
    setIsConfettiOn(true);
    setActiveMember(undefined);
  };

  const activateMember = (member: Member) => {
    setIsConfettiOn(false);
    setActiveMember(member);
  };

  return (
    <div className="mb-20">
      <p className="mt-3 mb-8 text-2xl text-gray-500">
        Our team in {isShuffled ? "standup" : "alphabetical"} order:
      </p>
      {isShuffled && (
        <BigTimer
          autoStart={!!activeMember}
          date={Date.now() + timeInMinutes * 60 * 1000}
        />
      )}
      <div className="relative h-40" style={{ width }}>
        {transitions((style, member, _, index) => (
          <animated.div
            className="absolute cursor-pointer"
            style={{ zIndex: team.length - index, ...style }}
            onClick={() => activateMember(member)}
          >
            <div className="relative p-5 bg-cover">
              <div
                className={classNames(
                  "relative flex justify-center items-center bottom-0 left-0 w-full rounded-md shadow-md h-20 ease-in-out duration-300",
                  member.name === activeMember?.name && "scale-125"
                )}
                style={{ backgroundImage: member.css }}
              >
                <p className="text-lg text-gray-700 font-bold drop-shadow-lg">
                  {member.name}
                </p>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
      <button
        type="button"
        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={shuffleItems}
      >
        <RefreshIcon className="h-8 w-8" aria-hidden="true" />
      </button>
      <Confetti
        isConfettiOn={isConfettiOn}
        callback={() => setIsConfettiOn(false)}
      />
    </div>
  );
};

export default Standup;
