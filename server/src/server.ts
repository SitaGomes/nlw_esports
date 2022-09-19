import express, { Request, Response } from "express"
import cors from "cors"
import {PrismaClient} from "@prisma/client"

import {convertHourStringToMinutes} from "./utils/convert-hour-string-to-minutes"
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string"

interface IAd {
    name: string,
    weekDays: string[],
    gameId: string,
    discord: string,
    useVoiceChannel: boolean,
    yearsPlaying: number,
    hourStart: string,
    hourEnd: string,
}


const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ["query"]
})

app.post("/games/:id/ads", async (request: Request, response: Response) => {

    const gameId = request.params.id

    const body: IAd = request.body
    
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            discord: body.discord,
            useVoiceChannel: body.useVoiceChannel,
            weekDays: body.weekDays.join(","), //! Juntando em um array
            yearsPlaying: body.yearsPlaying
        }
    })


    return response.status(201).json(ad)
})


app.get("/games", async (request: Request, response: Response) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    }) 

    //? Listando todos games no db e juntando a quantidade de Ads

    return response.status(200).json(games)
})


app.get("/games/:id/ads", async (request: Request, response: Response) => {
    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true, 
            useVoiceChannel: true,
            hourEnd: true,
            hourStart: true,
            yearsPlaying: true
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    //? Selecionando os campos desejados, procurando por um ad com gameId especifico, e ordenando por criação mais recente


    return response.status(200).json(ads.map(ad => {
        return{
            ...ad,
            weekDays: ad.weekDays.split(","),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd)
        }
    }))
    //? Retornando os weekDays em um array de posições diferentes
})


app.get("/ads/:id/discord", async (request: Request, response: Response) => {
    const adId = request.params.id

    try {

        const ad = await prisma.ad.findUniqueOrThrow({
            select: {
                discord: true,
            },
            where: {
                id: adId
            }
        })


        return response.status(200).json({
            discord: ad.discord
        })

    } catch (error) {
        return response.status(400).json({"Error Message": "Ad id not found"})
    }

    //? Pegando o discord pelo id do ad, se não houver jogue tudo fora
})


app.listen(3333)