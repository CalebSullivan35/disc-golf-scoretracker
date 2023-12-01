"use client";

import { useState } from "react";

export function IndividualPlayerForm() {
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      ></input>
    </div>
  );
}
