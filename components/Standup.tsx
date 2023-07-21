import { RefreshIcon } from "@heroicons/react/outline";
import { animated, useTransition } from "@react-spring/web";
import shuffle from "lodash/shuffle";
import { FC, useEffect, useRef, useState } from "react";

import { classNames } from "../utils";
import BigTimer from "./BigTimer";
import Confetti from "./Confetti";
import { MemberCardDetails, memberCardDetails } from "./teams";

const timeInMinutes = 3;
const cardWidth = 170;

interface Props {
  members: string[];
}

const Standup: FC<Props> = ({ members }) => {
  const [items, setItems] = useState<MemberCardDetails[]>(memberCardDetails(members));
  const [activeMember, setActiveMember] = useState<MemberCardDetails | undefined>();
  const [isShuffled, setIsShuffled] = useState(false);
  const [isConfettiOn, setIsConfettiOn] = useState(false);

  /**
   * We need to set the interval inside a worker. Otherwise the browser
   * will deprioritize an inactive tab and the interval won't fire as expected.
   *
   * Posting an array of team members to the worker triggers the inteval.
   * Then we listen for its messages to update page title.
   */
  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new Worker(new URL("../page-title-worker.ts", import.meta.url));
    workerRef.current.onmessage = (event: MessageEvent<string>) =>
      (document.title = event.data);
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  let width = 0;

  const transitions = useTransition(
    items.map((item) => ({
      ...item,
      x: (width += cardWidth) - cardWidth,
    })),
    {
      key: (item: MemberCardDetails) => item.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: (item) => ({ x: item.x, width: cardWidth, opacity: 1 }),
      update: (item) => ({ x: item.x, width: cardWidth }),
    }
  );

  const shuffleItems = () => {
    setItems((items) => {
      const shuffledItems = shuffle(items);
      workerRef.current?.postMessage(shuffledItems);

      setIsShuffled(true);
      setIsConfettiOn(true);
      setActiveMember(undefined);

      return shuffledItems;
    });
  };

  const activateMember = (member: MemberCardDetails) => {
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
            style={{ zIndex: items.length - index, ...style }}
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
      <Confetti isConfettiOn={isConfettiOn} callback={() => setIsConfettiOn(false)} />
    </div>
  );
};

export default Standup;
