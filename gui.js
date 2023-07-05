class GUI {

    constructor() {
        this.cellar = new Cellar();
        // this.storage = new Storage();


        const data = Storage.loadData();
        if (data !== null) {
            this.cellar = Cellar.fromDbObjects(data)
        } else {

        }



    }


    start() {

        while (true) {
            const firtsChoice = prompt(
                'Ciao utente. La nostra cantina ha a disposizione ' + this.cellar.beverageCount + ' bevande.\n' +
                'Hai 4 opzioni:  \n' +
                '1) Guarda la lista dei prodotti \n' +
                '2) Aggiungi una bevanda \n' +
                '3) Rimuovi una bevanda dalla lista \n' +
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
        const vol = parseInt(prompt('Inserisci la gradazione alcolica'))
        const region = prompt('Inserisci la regione di provenienza ')
        const type = prompt('Inserisci la tipologia di bevanda (birra o vino)');
       
        if (type === 'vino') {

            const maker = prompt('Inserisci il produttore');
            const dop = prompt('Inserisci l\'anno di imbottigliamento');
            const vine = prompt('Inserisci la varietà di uva utilizzata ');
            const wine = new Wine(name, vol, region, type, maker, dop, vine);
            this.cellar.addBeverage(wine);
            Storage.saveData(this.cellar.beveragesArray)
            
            return;



        } else if (type === 'birra') {
            const malt = prompt('Inserisci il tipo di malto utilizzato')
            const style = prompt('Inserisci il sottostile della birra (Es: IPA, Weiss, etc...)')
            const beer = new Beer(name, vol, region, type, malt, style)
            this.cellar.addBeverage(beer);
            Storage.saveData(this.cellar.beveragesArray)
            return;

        } else {
            alert('Non puoi inserire altre tipologie di prodotto')
            return


        }

       
    
       
    }

    showBeverages() {

        const allBeverages = this.cellar.getAllBeveragesCard();

        alert(allBeverages)
    }


    deleteBeverage() {

        const humanIndex = prompt('inserisci il numero del prodotto che vuoi eliminare')
        const index = humanIndex - 1
        this.cellar.deleteBeverage(index)
        Storage.saveData(this.cellar.beveragesArray)   
    }


    
}