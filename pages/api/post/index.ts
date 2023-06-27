import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, type, muscle, difficulty, equipment, instructions, id } =
    req.body;
  let result;

  if (id) {
    result = await prisma.workout.upsert({
      where: {
        id: id,
      },
      update: {
        name,
        type,
        muscle,
        difficulty,
        equipment,
        instructions,
      },
      create: {
        name,
        type,
        muscle,
        difficulty,
        equipment,
        instructions,
      },
    });
  } else {
    result = await prisma.workout.create({
      data: {
        name,
        type,
        muscle,
        difficulty,
        equipment,
        instructions,
      },
    });
  }

  res.json(result);
}
