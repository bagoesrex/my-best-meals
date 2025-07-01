import fs from "node:fs";
import { writeFile } from "fs/promises";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (!meal.image || typeof meal.image.arrayBuffer !== "function") {
    throw new Error("Invalid image file");
  }

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();
  await writeFile(`public/images/${fileName}`, Buffer.from(bufferedImage));

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
     (slug, title, image, summary, instructions, creator, creator_email)
     VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
     )
    `
  ).run(meal);
}
