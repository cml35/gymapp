import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post
// @ts-ignore
export default async function handle(req, res) {
  const { name, type, muscle, difficulty, equipment, instructions } = req.body;
  console.log("name: " + name);

  // const session = await getSession({ req });
  // @ts-ignore
  const result = await prisma.workout.create({
    data: {
      name,
      type,
      muscle,
      difficulty,
      equipment,
      instructions,
    },
  });
  res.json(result);
}
