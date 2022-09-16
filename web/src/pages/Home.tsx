import {MagnifyingGlassPlus} from "phosphor-react"

import "../styles/main.css"
import logoImage from "../assets/logo.svg"

export function Home() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImage} alt="NLW logo" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>
    
      <div className="grid grid-cols-6 gap-6 mt-16"> 
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="game 1" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="game 2" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="game 3" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="game 4" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="game 5" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="game 6" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World of warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios </span>
          </div>
        </a>
        
        
      </div>
    
      <div className="pt-1 bg-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-white text-2xl font-black block">Não encontrou o seu duo</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-2">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

