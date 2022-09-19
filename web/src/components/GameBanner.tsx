interface IGameBanner {
    url: string,
    title: string,
    adsCount: number,
}

export function GameBanner({adsCount, title, url}: IGameBanner) {
    return(
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src={url} alt="game 1" />
          <div className="w-full pb-4 pt-16 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{title}</strong>
            <span className="text-zinc-300 text-sm block">{adsCount} anúncion(s)</span>
          </div>
        </a>
    )
}