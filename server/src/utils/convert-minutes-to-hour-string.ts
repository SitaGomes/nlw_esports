// "18h30" => ["18", "00"] => [18, 00] => 18 * 60 + 00 ==> 1080 minutos


export function convertMinutesToHourString(minutesAmount: number) {

    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    const result = String(hours).padStart(2, "0") + ':' + String(minutes).padStart(2, "0")
        //? Adiciona 0 no começo se for menor de 2 digitos

    return result
}