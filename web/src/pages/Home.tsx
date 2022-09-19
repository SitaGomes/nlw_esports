import "../styles/main.css"
import logoImage from "../assets/logo.svg"

import { GameBanner } from "../components/GameBanner"
import { CreateAddBanner } from "../components/CreateAddBanner"
import { useEffect, useState } from "react"

interface IGame {
  id: string,
  title: string,
  bannerUrl: string
  _count: {
    ads: number
  }
}


export function Home() {

  const [games, setGames] = useState([] as IGame[])

  console.log(games)

  useEffect(() => {
  
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))

  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImage} alt="NLW logo" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>
    
      <div className="grid grid-cols-6 gap-6 mt-16"> 
        {games.map(game => (

          <GameBanner 
            key={game.id}
            adsCount={game._count.ads}
            title={game.title}
            url={game.bannerUrl}
          />

        ))}
        
      </div>

      <CreateAddBanner />
    
    </div>
  )
}

