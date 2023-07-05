class Beverage {
    constructor(name, vol, region, type) {
        this.name = name;
        this.vol = vol;
        this.region = region
        this.type = type;
    }


    toString() {

        const card = '\n Etichetta: ' + this.name + '\n' +

            ' Gradazione alcolica: ' + this.vol + '%' + '\n' +  

            ' Tipologia di prodotto: ' + this.type + '\n' +

            ' Regione di provenienza: ' + this.region + '\n';
        return card;
    }

}