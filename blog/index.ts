import { Request,Response, Router } from "express";
import blogModel from "../models/blog";
const blogRouter = Router()

blogRouter.get("/:title", async (req: Request, res:Response) => {
    try {
        const title = req.params.title
        const blog = await blogModel.findOne({ title }).exec();
        res.send(blog)
    } catch (error) {
        console.log(error)
    }
})

export default blogRouter
