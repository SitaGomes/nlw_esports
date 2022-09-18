import express, { Request, Response } from "express"

const app = express()

app.post("/ads", (request: Request, response: Response) => {
    return response.status(201).json([])
})


app.get("/games", (request: Request, response: Response) => {
    return response.status(200).send("Ola mundo")
})


app.get("/games/:id/ads", (request: Request, response: Response) => {
    const gameId = request.params.id

    return response.status(200).json(gameId)
})


app.get("/ads/:id/discord", (request: Request, response: Response) => {
    const adsId = request.params.id

    return response.status(200).json(adsId)
})


app.listen(3333)