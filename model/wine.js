class Wine extends Beverage {
    constructor (name, maker, type, vol, dop, vine, region){
        super(name, maker, type, vol, dop);
        this.vine = vine;
        this.region = region;
    }

    toString(){
        const wineCard = super.toString() +
        'Vitigno '  + this.vine + '\n';
        'Regione '  + this.region + '\n';
        return wineCard;        
    }
    
}