import React, { FC, useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash/shuffle";

const height = 120;

const data = [
  {
    name: "Chris",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height,
  },
  {
    name: "Jan",
    css: "linear-gradient(135deg, #ed6fbb 0%, #ff9378 100%)",
    height,
  },
  {
    name: "Noey",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    height,
  },
  {
    name: "Oo",
    css: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    height,
  },
  {
    name: "Pin",
    css: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
    height,
  },
];

const Standup: FC = () => {
  const [items, setItems] = useState(data);

  let height = 0;
  const transitions = useTransition(
    items.map((data) => ({
      ...data,
      y: (height += data.height) - data.height,
    })),
    {
      key: (person: any) => person.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );

  return (
    <>
      <a href="#" onClick={() => setItems(shuffle)}>
        Shuffle
      </a>
      <div className="relative w-60 mx-auto" style={{ height }}>
        {transitions((style, item, _, index) => (
          <animated.div
            className="absolute w-full"
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
    </>
  );
};

export default Standup;
