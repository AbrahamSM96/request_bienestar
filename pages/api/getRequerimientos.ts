import prisma from "lib/prisma";

export default async (req, res) => {
  try {
    const data = await prisma.requerimientos.findMany({
      orderBy: {
        created_at: "asc",
      },
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
