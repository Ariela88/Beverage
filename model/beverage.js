class Beverage {
    constructor(name, vol, region, type) {
        this.name = name;
       this.vol = vol;
       this.region = region
        this.type = type;
    }


    toString() {

        const card = 'Etichetta:' + this.name + '\n' +
            
            '2) Gradazione alcolica: ' + this.vol + '\n' +
            
            '3) Tipologia di prodotto: ' + this.type + '\n' +
        
            '4) Regione di provenienza: ' + this.region+ '\n';
        return card;
    }

}