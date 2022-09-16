import "../styles/main.css"

import logoImage from "../assets/logo.svg"

export function Home() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImage} alt="NLW logo" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>
    
      <div className="grid grid-cols-6 gap-6 mt-16"> 
        <a href="#">
          <img src="/game-1.png" alt="game 1" />
        </a>
        <a href="#">
          <img src="/game-2.png" alt="game 2" />
        </a>
        <a href="#">
          <img src="/game-3.png" alt="game 3" />
        </a>
        <a href="#">
          <img src="/game-4.png" alt="game 4" />
        </a>
        <a href="#">
          <img src="/game-5.png" alt="game 5" />
        </a>
        <a href="#">
          <img src="/game-6.png" alt="game 6" />
        </a>
      </div>
    
    </div>
  )
}

