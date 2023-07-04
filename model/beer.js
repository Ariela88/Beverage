class Beer extends Beverage {
    constructor (name,vol, region, type, malt,style,){
        super(name,vol,region,type);
        this.malt = malt;
        this.style = style;
        
    }

    toString(){
        const card = super.toString() +
        'Malto '  + this.malt + '\n' +
        'Sottostile: ' + this.style;
        return card;        
    }
    
    
}