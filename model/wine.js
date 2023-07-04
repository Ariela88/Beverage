class Wine extends Beverage {
    constructor (name, vol, region, type, maker, dop, vine){
        super(name, vol, region, type);
        
        this.maker = maker;
        this.vine = vine;
        this.dop = dop;
    }

    toString(){
        const card = super.toString() +
        'Data di imbottigliamento: ' + this.dop + '\n' +
        'Produttore: ' + this.maker + '\n' +
        'Uva utilizzata  '  + this.vine + '\n';
        
        return card;        
    }

 
    
}