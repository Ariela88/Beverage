class Beer extends Beverage {
    constructor (name,vol, region, type, malt,style,){
        super(name,vol,region,type);
        this.malt = malt;
        this.style = style;
        
    }

    toString(){
        return super.toString() + 
        ' Malto: '  + this.malt + '\n' +
        ' Sottostile: ' + this.style + '\n';
          
    }
    
    
}