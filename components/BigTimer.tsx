import { FC } from "react";
import Countdown, { CountdownRenderProps, zeroPad } from "react-countdown";

import { classNames } from "../utils";

const renderer = ({ minutes, seconds, total }: CountdownRenderProps) => {
  const threshold = 30000; // milliseconds

  const timeLeft = `${minutes}:${zeroPad(seconds)}`;

  return (
    <div
      className={classNames(
        total >= threshold && "text-pink-900 text-opacity-60",
        total < threshold &&
          total > 0 &&
          "animate-pulse text-yellow-500 text-opacity-60",
        total === 0 && "text-red-100",
        "text-10xl leading-none my-10 font-bold"
      )}
    >
      {timeLeft}
    </div>
  );
};

interface Props {
  autoStart: boolean;
  date: number;
}

const BigTimer: FC<Props> = ({ autoStart, date }) => (
  <Countdown
    key={date}
    autoStart={autoStart}
    date={date}
    renderer={renderer}
    intervalDelay={250}
  />
);

export default BigTimer;
