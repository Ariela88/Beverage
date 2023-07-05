class Wine extends Beverage {
        constructor (name, vol, region, type, maker, dop, vine){
        super(name, vol, region, type);
        
        this.maker = maker;
        this.vine = vine;
        this.dop = dop;
    } 

    set dop(value){
        if (value === null) {
            this._dop = new Date();
            
        }else if(value.includes('/')){

        const dopArray = value.split('/')
        const year = parseInt(dopArray[2])
        const month = parseInt(dopArray[1]) - 1;
        const day = parseInt(dopArray[0]);
        this.dop = new Date(year, month, day);

        }else{
            this._dop = new Date(value)
        }
   } get dop (){
    return this._dop.toISOString()
   }

    toString(){
        return super.toString() +
        ' Produttore: ' + this.maker + '\n' +
        ' Data di imbottigliamento: ' + this.dop + '\n' +
        ' Uva utilizzata:  '  + this.vine + '\n';
         
    }

 
    
}