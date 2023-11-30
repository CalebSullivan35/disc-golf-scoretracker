"use client";

import { useRouter } from "next/navigation";
import { deleteGame } from "~/server/actions/gameActions";
import { SelectGameModel } from "~/server/db/schema";

type DeleteButtonProps = {
  game: SelectGameModel;
};

export default function DeleteButton({ game }: DeleteButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await deleteGame(game);
        router.refresh();
      }}
    >
      Delete
    </button>
  );
}
