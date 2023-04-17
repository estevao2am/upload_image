import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export class GetAllPostsController {
  async execute(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      select: {
        content: true,
        images: {
          select: {
            id: true,
            path: true,
          },
        },
      },
    });

    return res.status(200).json(posts);
  }
}
