import { getGames } from "~/server/actions/gameActions";
import CreateGame from "./_components/CreateGame";
import DeleteButton from "./_components/DeleteButton";

export default async function GamePage() {
  const myGames = await getGames();

  return (
    <div>
      <CreateGame />
      <div>
        {myGames.map((g) => (
          <>
            <h1>{g.gameName}</h1>
            <DeleteButton game={g} />
          </>
        ))}
      </div>
    </div>
  );
}
