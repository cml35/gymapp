import prisma from "../../../lib/prisma";

//@ts-ignore
export default async function handle(req, res) {
  if (req.method === "GET") {
    const exercises = await prisma.workout.findMany();
    res.json(exercises);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
