import React, { FC, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash/shuffle";
import { RefreshIcon } from "@heroicons/react/outline";

const width = 200;

const data = [
  {
    name: "Chris",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    width,
  },
  {
    name: "Jan",
    css: "linear-gradient(135deg, #ed6fbb 0%, #ff9378 100%)",
    width,
  },
  {
    name: "Noey",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    width,
  },
  {
    name: "Oo",
    css: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    width,
  },
  {
    name: "Pin",
    css: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
    width,
  },
];

const Standup: FC = () => {
  const [items, setItems] = useState(data);
  const [isShuffled, setIsShuffled] = useState(false);

  let width = 0;

  const transitions = useTransition(
    items.map((data) => ({
      ...data,
      x: (width += data.width) - data.width,
    })),
    {
      key: (person: any) => person.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ x, width }) => ({ x, width, opacity: 1 }),
      update: ({ x, width }) => ({ x, width }),
    }
  );

  const shuffleItems = () => {
    setItems(shuffle);
    setIsShuffled(true);
  };

  return (
    <>
      <p className="mt-3 mb-8 text-2xl">
        Our team (in {isShuffled ? "standup" : "alphabetical"} order):
      </p>
      <div className="relative h-40" style={{ width }}>
        {transitions((style, item, _, index) => (
          <animated.div
            className="absolute"
            style={{ zIndex: data.length - index, ...style }}
          >
            <div className="relative p-4 bg-cover">
              <div
                className="relative flex justify-center items-center bottom-0 left-0 w-full rounded-md shadow-md h-20"
                style={{ backgroundImage: item.css }}
              >
                <p className="text-lg text-gray-700 font-bold drop-shadow-lg">
                  {item.name}
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
    </>
  );
};

export default Standup;
