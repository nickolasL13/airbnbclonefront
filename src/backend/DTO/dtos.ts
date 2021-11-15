export interface TaxaDeServico {
    cobra: boolean,
    valorPerDay?: number,
}

export interface TaxaDeLimpeza {
    cobra: boolean,
    valor?: number,
}

export interface Imovel {
    iId: string,
    espaco: string
    label: string,
    nHospedes: number,  
    nQuartos: number,
    nCamas: number,
    nBanheiros: number,
    arCond: boolean,
    wifi: boolean,
    cozinha: boolean,
    freeParking: boolean,
    pricePerNight: number,
    taxaDeServico: TaxaDeServico,
    taxaDeLimpeza: TaxaDeLimpeza,
}

export default Imovel;