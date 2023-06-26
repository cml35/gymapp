import prisma from "../../../lib/prisma";

//@ts-ignore
export default async function handle(req, res) {
  const workoutId = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.workout.delete({
      where: { id: workoutId },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
