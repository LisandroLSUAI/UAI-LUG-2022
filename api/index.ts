import { Router } from "express";
import blogRouter from "../blog";

const apiRouter = Router()

apiRouter.use("/blog", blogRouter)

export default apiRouter
