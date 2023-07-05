class GUI {

    constructor() {
        this.cellar = new Cellar();
        // this.storage = new Storage();


        // const card = this.storage.loadData();
        // if (card) {
        //     this.cellar.fromDbObjects(card)
        // }
    }


    start() {

        while (true) {
            const firtsChoice = prompt('Hai 4 opzioni: \n 1) Guarda la lista dei prodotti \n' +
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
        const vol = prompt('Inserisci la gradazione alcolica');
        const region = prompt('Inserisci la provenienza ')
        const type = prompt('Inserisci il tipo di bevanda');



        if (type === 'vino') {

            const maker = prompt('Inserisci il produttore');
            const dop = prompt('Inserisci l\'anno di imbottigliamento');
            const vine = prompt('Inserisci la varietà di uva utilizzata ');
            const wine = new Wine(name, vol, region, type, maker, dop, vine);
            this.cellar.addBeverage(wine);
            return;



        } else if (type === 'birra') {
            const malt = prompt('Inserisci il tipo di malto utilizzato')
            const style = prompt('Inserisci il sottostile della birra (Es: IPA, Weiss, etc...)')
            const beer = new Beer(name, vol, region, type, malt, style)
            this.cellar.addBeverage(beer);
            return;

        } else {
            alert('Digitare Vino o Birra')


        }






        this.cellar.addBeverage(beverage);
        // this.storage.saveData(this.cellar.beverage)

    }






    showBeverages() {

        const allBeverages = this.cellar.getAllBeverageCard();

        alert(allBeverages)
    }


    deleteBeverage() {

        const humanIndex = prompt('inserisci il numero del prodotto che vuoi eliminare')
        const index = humanIndex - 1
        this.cellar.deleteBeverage(index)
        // this.storage.saveData(this.cellar.beverage)   
    }
}