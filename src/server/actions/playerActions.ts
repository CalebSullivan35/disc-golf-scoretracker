"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { InsertPlayerModel, SelectPlayerModel, players } from "../db/schema";

//insert a player into the db
export async function insertPlayer(input: InsertPlayerModel) {
  return db.insert(players).values({
    name: input.name,
  });
}
//delete a player from db
export async function deletePlayer(player: SelectPlayerModel) {
  await db.delete(players).where(eq(players.id, player.id));
}
