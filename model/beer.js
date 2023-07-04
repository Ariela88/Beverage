class Beer extends Beverage {
    constructor (name, maker, vol, dop, malt, type){
        super(name, maker, vol, dop, type);
        this.malt = malt;
    }

    toString(){
        const wineCard = super.toString() +
        'Malto '  + this.malt + '\n';
        return wineCard;        
    }
    
    
}