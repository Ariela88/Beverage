class Beverage{
    constructor (name, maker, vol, dop, type){
      this.name = name;
      this.maker = maker;
      this.vol = vol;
      this.dop = dop;
      this.type = type;
    }


    toString() {
      
        const card = 'Etichetta:' + this.name + '\n' +
            'Produttore: ' + this.maker + '\n' +
            'Gradazione alcolica: ' + this.vol + '\n' +
            'Data di imbottigliamento: ' + this.dop + '\n' +
            'Tipologia di prodotto: ' + this.type + '\n';
        return card;
    }

}