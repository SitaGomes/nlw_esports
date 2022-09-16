import express, { Request, Response } from "express"

const app = express()

app.get("/", (request: Request, response: Response) => {
    response.json([{message: "Dist directory babyyyy"}, {message: "Ts-node-dev"}])
})

app.listen(3333)