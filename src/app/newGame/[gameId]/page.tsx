// pages/newGame/[id].tsx
import { useRouter } from "next/router";

export default function NewGamePage({
  params: { gameId },
}: {
  params: {
    gameId: string;
  };
}) {
  return (
    <div>
      <h1>New Game ID: {gameId}</h1>
    </div>
  );
}
