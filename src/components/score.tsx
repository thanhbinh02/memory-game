import { useGameStore } from "../hooks";

const Score = () => {
  const score = useGameStore((state) => state.score);

  return <div className="text-3xl">Score: {score}</div>;
};

export default Score;
