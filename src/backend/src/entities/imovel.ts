export interface imovel {
    iId: Number,
    espaco: String
    label: String,
    nHospedes: String,  
    nQuartos: Number,
    nCamas: Number,
    nBanheiros: Number,
    arCond: Boolean,
    wifi: Boolean,
    cozinha: Boolean,
    freeParking: Boolean,
    pricePerNight: Number,
    taxaDeServico: {
        cobra: Boolean,
        valorPerDay?: Number,
    }
    taxaDeLimpeza: {
        cobra: Boolean,
        valor?: Number,
    }
}