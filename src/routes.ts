import { Router, Request, Response } from "express";
import { CreatePostController } from "./controllers/CreatePostController";
import uploadConfig from "./config/multer";
import multer from "multer";
import { GetAllPostsController } from "./controllers/GetAllPostsController";

// Instanciando a class
const createPostController = new CreatePostController();
const getAllPost = new GetAllPostsController();

const uploadImage = multer(uploadConfig);

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Eventus Social Midia",
  });
});

routes.post("/post", uploadImage.array("images"), createPostController.execute);
routes.get("/post", getAllPost.execute);
