import { Request,Response, Router } from "express";
const blogRouter = Router()

blogRouter.get("/", (req: Request, res:Response) => {
    res.send("Algo")
})

export default blogRouter
