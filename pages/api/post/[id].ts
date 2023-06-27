import prisma from "../../../lib/prisma";

//@ts-ignore
export default async function handle(req, res) {
  const exerciseId = req.query.id;
  if (req.method === "DELETE") {
    const exercise = await prisma.workout.delete({
      where: { id: exerciseId },
    });
    res.json(exercise);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// if (req.method === "PUT") {
//     const { name, type, muscle, difficulty, equipment, instructions } =
//       req.body;
//     const post = await prisma.workout.update({
//       where: {
//         id: exerciseId,
//       },
//       data: {
//         name,
//         type,
//         muscle,
//         difficulty,
//         equipment,
//         instructions,
//       },
//     });
//     res.json(post);
//   } else {
//     throw new Error(
//       `The HTTP ${req.method} method is not supported at this route.`
//     );
//   }
