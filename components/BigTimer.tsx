import Image from "next/image";
import { FC } from "react";
import Countdown, { CountdownRenderProps, zeroPad } from "react-countdown";

import { classNames } from "../utils";

const renderer = ({ minutes, seconds, total }: CountdownRenderProps) => {
  const threshold = 30000; // milliseconds

  const timeLeft = `${minutes}:${zeroPad(seconds)}`;
  document.title = `${timeLeft} - Core Platform Standup`;

  return (
    <div
      className={classNames(
        total >= threshold && "text-white text-opacity-80",
        total < threshold &&
          total > 0 &&
          "animate-pulse text-yellow-500 text-opacity-60",
        total === 0 && "text-red-100",
        "text-10xl leading-none my-10 font-bold"
      )}
    >
      <div className="relative inline-block">
        {timeLeft}
        <div className="inline-block w-28 absolute -top-4 -right-12">
          <Image
            src="/santa_hat.png"
            width={512}
            height={512}
            layout="responsive"
            alt="Merry Christmas"
            title="Merry Christmas"
            priority
          />
        </div>
      </div>
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
