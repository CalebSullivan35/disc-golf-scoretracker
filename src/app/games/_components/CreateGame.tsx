"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { insertGame } from "~/server/actions/gameActions";

export default function CreateGame() {
  const [name, setName] = useState("");
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="mx-auto mt-10 flex w-40 flex-col">
      <input
        className="mb-2 rounded-sm border-2 border-black p-2"
        type="text"
        onChange={(e) => setName(e.target.value as string)}
      ></input>
      <button
        className=" bg-slate-500 px-2 hover:cursor-pointer"
        onClick={async () => {
          const response = await insertGame({
            userId: user!.id,
            gameName: name,
          });
          console.log(response);
          router.push(`/newGame/${response.insertId}`);
        }}
      >
        Create A Game Homie
      </button>
      <div>{user?.id}</div>
    </div>
  );
}
