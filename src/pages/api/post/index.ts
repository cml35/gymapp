import { getSession } from "next-auth/react";
import prisma from "../../../../lib/prisma";

// POST /api/post
// @ts-ignore
export default async function handle(req, res) {
  const { name, type, muscle, difficulty, equipment, instructions } = req.body;

  const session = await getSession({ req });
  // @ts-ignore
  const result = await prisma.post.create({
    data: {
      name,
      type,
      muscle,
      difficulty,
      equipment,
      instructions,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
