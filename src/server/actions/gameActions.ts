"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { InsertGameModel, SelectGameModel, games } from "../db/schema";

export async function insertGame(input: InsertGameModel) {
  return db.insert(games).values({
    userId: input.userId,
    gameName: input.gameName,
  });
}

export async function getGames() {
  return db.select().from(games);
}

export async function deleteGame(game: SelectGameModel) {
  await db.delete(games).where(eq(games.id, game.id));
}

export async function getGameById(gameId: number) {
  return db.query.games.findFirst({
    where: (games, { eq }) => eq(games.id, gameId),
  });
}
