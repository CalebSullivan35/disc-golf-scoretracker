"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import {
  InsertGamePlayerModel,
  SelectGamePlayerModel,
  gamePlayers,
} from "../db/schema";

export async function insertGamePlayer(input: InsertGamePlayerModel) {
  return db.insert(gamePlayers).values({
    gameId: input.gameId,
    playerId: input.playerId,
  });
}

export async function deleteGamePlayer(gamePlayer: SelectGamePlayerModel) {
  await db.delete(gamePlayers).where(eq(gamePlayers.id, gamePlayer.id));
}
