import React, { FC } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

interface Props {
  isConfettiOn?: boolean;
  callback: () => void;
}

const Celebration: FC<Props> = ({ isConfettiOn, callback }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  if (!isConfettiOn) return null;

  return (
    <Confetti
      width={windowWidth}
      height={windowHeight}
      recycle={false}
      numberOfPieces={500}
      gravity={0.15}
      onConfettiComplete={callback}
    />
  );
};

export default Celebration;
