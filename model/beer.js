class Beer extends Beverage {
    constructor (name,vol, region, type, malt,style,){
        super(name,vol,region,type);
        this.malt = malt;
        this.style = style;
        
    }

    toString(){
        const card = super.toString() + 
        '5) Malto: '  + this.malt + '\n' +
        '6) Sottostile: ' + this.style + '\n';
        return card;        
    }
    
    
}