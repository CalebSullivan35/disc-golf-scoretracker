// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import exp from "constants";
import { InferSelectModel, sql } from "drizzle-orm";
import {
  int,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  datetime,
} from "drizzle-orm/mysql-core";
import { InferInsertModel } from "drizzle-orm";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator(
  (name) => `disc-golf-scoretracker_${name}`,
);

// export const posts = mysqlTable(
//   "post",
//   {
//     id: int("id").primaryKey().autoincrement(),
//     name: varchar("name", { length: 256 }),
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt").onUpdateNow(),
//   },
//   (example) => ({
//     nameIndex: index("name_idx").on(example.name),
//   }),
// );

//Game Table Managment
export const games = mysqlTable("game", {
  userId: varchar("user_Id", { length: 50 }),
  id: int("id").primaryKey().autoincrement(),
  gameName: varchar("game_name", { length: 50 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export type InsertGameModel = InferInsertModel<typeof games>;
export type SelectGameModel = InferSelectModel<typeof games>;

// export const players = mysqlTable("player", {
//   id: int("id").primaryKey().autoincrement(),
//   name: varchar("name", { length: 50 }),
// });
// export type InsertPlayerModel = InferInsertModel<typeof players>;
// export type SelectPlayerModel = InferSelectModel<typeof players>;

export const gamePlayers = mysqlTable("gamePlayer", {
  id: int("id").primaryKey().autoincrement(),
  gameId: int("game_id").references(() => games.id),
  playerName: varchar("player-name", { length: 50 }),
});
export type InsertGamePlayerModel = InferInsertModel<typeof gamePlayers>;
export type SelectGamePlayerModel = InferSelectModel<typeof gamePlayers>;

// export const roundScores = mysqlTable("roundScore", {
//   id: int("id").primaryKey().autoincrement(),
// });

// creating a typescript type for the insert model?? Type used to create a player.
// type InsertPlayerModel = InferInsertModel<typeof players>;
