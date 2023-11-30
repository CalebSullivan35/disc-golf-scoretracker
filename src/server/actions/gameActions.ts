"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { InsertGameModel, SelectGameModel, games } from "../db/schema";

export async function insertGame(input: InsertGameModel) {
  return db.insert(games).values({
    gameName: input.gameName,
  });
}

export async function getGames() {
  return db.select().from(games);
}

export async function deleteGame(game: SelectGameModel) {
  await db.delete(games).where(eq(games.id, game.id));
}
