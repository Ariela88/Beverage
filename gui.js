class GUI{

    constructor(){
        this.cellar = new Cellar();
        // this.storage = new Storage();


        // const card = this.storage.loadData();
        // if (card) {
        //     this.cellar.fromDbObjects(card)
        // }
    }


    start(){

        while (true) {
            const firtsChoice = prompt('Hai 4 opzioni: \n1) Guarda la lista dei prodotti \n' +
                '2) Aggiungi una bevanda \n' +
                '3) Rimuovi bevanda \n' +
                '4) Esci \n' +
                'Inserisci il numero dell\'operazione');

            if (firtsChoice === '1') {

                this.showBeverages()

            } else if (firtsChoice === '2') {
                this.insertBeverage()

                
            } else if (firtsChoice === '3') {

                this.deleteBeverage()

            } else if (firtsChoice === '4') {
                break;

            } else {
                alert('Inserisci un numero della lista, per favore');
            }

        }

    }

    insertBeverage() {
        const name = prompt('Inserisci il nome del prodotto');
        const region = prompt('Inserisci la provenienza ')
        const vol = prompt('Inserisci la gradazione alcolica');
        const type = prompt('Inserisci il tipo di bevanda');

        const beverage = new Beverage(name, vol, region, type);

            if (type === 'vino') {
                const maker = prompt('Inserisci il produttore');
                const dop = prompt('Inserisci l\'anno di imbottigliamento');
                const vine = prompt('Inserisci la varietà di uva utilizzata ')
                

            }else if(type === 'birra'){
                const malt = prompt('Inserisci il tipo di malto utilizzato')
                const style = prompt('Inserisci il sottostile della birra (Es: IPA, Weiss, etc...)')
                
                
            } else {
                alert('Digitare Vino o Birra')
                
                
            }

            
        
    
            this.cellar.addBeverage(beverage);
        // this.storage.saveData(this.cellar.beverage)
        
        }

       
 
    


    showBeverages() {

        const allBeverage = this.cellar.getAllBeverageCard();

        alert(allBeverage)
    }


    deleteBeverage(){

        const humanIndex = prompt('inserisci il numero del prodotto che vuoi eliminare')
        const index = humanIndex - 1
        this.cellar.deleteBeverage(index)
        // this.storage.saveData(this.cellar.beverage)   
    }
}