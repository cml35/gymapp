import prisma from "../../../lib/prisma";

// POST /api/post
// @ts-ignore
export default async function handle(req, res) {
  const { name, type, muscle, difficulty, equipment, instructions, id } =
    req.body;
  let result;

  // @ts-ignore
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
