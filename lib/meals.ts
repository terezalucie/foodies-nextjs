import Database from 'better-sqlite3';
import { type Meal } from '@/types/meals';

const db = new Database('meals.db');

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error('Loading meals failed')

  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string): Meal | undefined {
  const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
  const meal = stmt.get(slug) as Meal | undefined;
  //throw new Error('Loading meal failed')

  return meal;
}