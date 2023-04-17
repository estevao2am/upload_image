import { Request, Response } from "express";
import { prisma } from "../prisma/client";
//import { Multer } from "multer";

export class CreatePostController {
  async execute(req: Request, res: Response) {
    const { content } = req.body;
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return {
        path: image.filename,
      };
    });
    const post = await prisma.post.create({
      data: {
        content,
        images: {
          create: images,
        },
      }, // selecionar os campos do retorno
      select: {
        content: true,
        images: {
          select: { path: true },
        },
      },
    });
    return res.status(200).json({ message: "Post Feito Com Sucesso", post });
  }
}
