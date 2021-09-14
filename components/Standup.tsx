import React, { FC, useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash/shuffle";

const height = 120;

const data = [
  {
    name: "Chris",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height,
  },
  {
    name: "Jan",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height,
  },
  {
    name: "Noey",
    description: "#d299c2 → #fef9d7",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    height,
  },
  {
    name: "Oo",
    description: "#f6d365 → #fda085",
    css: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    height,
  },
  {
    name: "Pin",
    description: "#96fbc4 → #f9f586",
    css: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
    height,
  },
];

const Standup: FC = () => {
  const [rows, set] = useState(data);
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000);
    return () => clearInterval(t);
  }, []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
    {
      key: (item: any) => item.name,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  return (
    <div className="relative w-60 mx-auto" style={{ height }}>
      {transitions((style, item, t, index) => (
        <animated.div
          className="absolute w-full"
          style={{ zIndex: data.length - index, ...style }}
        >
          <div className="relative w-full h-full p-4 bg-cover">
            <div
              className="relative bottom-0 left-0 w-full h-full rounded-md shadow-md"
              style={{ backgroundImage: item.css }}
            />
            {item.name}
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Standup;
