class Wine extends Beverage {
    constructor (name, vol, region, type, maker, dop, vine){
        super(name, vol, region, type);
        
        this.maker = maker;
        this.vine = vine;
        this.dop = dop;
    }

    toString(){
        const card = super.toString() +
        '5) Produttore: ' + this.maker + '\n' +
        '6) Data di imbottigliamento: ' + this.dop + '\n' +
        '7) Uva utilizzata:  '  + this.vine + '\n';
        
        return card;        
    }

 
    
}