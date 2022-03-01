import React, { FC } from "react";
import Countdown, { zeroPad, CountdownRenderProps } from "react-countdown";

import { classNames } from "../utils";

const renderer = ({ minutes, seconds, total }: CountdownRenderProps) => {
  const threshold = 30000; // milliseconds

  return (
    <div
      className={classNames(
        total >= threshold && "text-pink-900 text-opacity-60",
        total < threshold &&
          total > 0 &&
          "animate-pulse text-yellow-500 text-opacity-60",
        total === 0 && "text-pink-100",
        "text-10xl leading-none my-10 font-bold"
      )}
    >
      {minutes}:{zeroPad(seconds)}
    </div>
  );
};

interface Props {
  autoStart: boolean;
  date: number;
}

const BigTimer: FC<Props> = ({ autoStart, date }) => (
  <Countdown key={date} autoStart={autoStart} date={date} renderer={renderer} />
);

export default BigTimer;
