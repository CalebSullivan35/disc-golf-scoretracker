// pages/newGame/[id].tsx
import { useRouter } from "next/router";
import { getGameById } from "~/server/actions/gameActions";
import { IndividualPlayerForm } from "./_components/IndividualPlayerForm";

export default async function NewGamePage({
  params: { gameId },
}: {
  params: {
    gameId: string;
  };
}) {
  const game = await getGameById(parseInt(gameId));

  return (
    <div>
      <p>Game Name: {game?.gameName}</p>
      <div>
        <IndividualPlayerForm />
      </div>
      <button>Add Player</button>
      <button>Remove Player</button>
    </div>
  );
}
