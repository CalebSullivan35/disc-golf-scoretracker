import { getGames } from "~/server/actions/gameActions";
import CreateGame from "./_components/CreateGame";
import DeleteButton from "./_components/DeleteButton";

export default async function GamePage() {
  const myGames = await getGames();

  return (
    <div>
      <h1> Future List of games</h1>
    </div>
  );
}
