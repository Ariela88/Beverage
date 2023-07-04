class GUI{

    constructor(){
        this.cellar = new Cellar();
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

                if (type === 'vino') {
                    this.insertWine()
                }

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
        const maker = prompt('Inserisci il produttore');
        const vol = prompt('Inserisci la gradazione alcolica');
        const dop = prompt('Inserisci anno di imbottigliamento yyyy');
        const type = prompt('Inserisci il tipo di bevanda');

        const beverage = new Beverage(name, maker, vol, dop, type);

        this.cellar.addBeverage(beverage);

        // this.storage.saveData(this.library.publications)

    }


    showBeverages() {

        const allBeverage = this.cellar.getAllBeverageCard();

        alert(allBeverage)
    }


    deleteBeverage(){

        const humanIndex = prompt('inserisci il numero del prodotto che vuoi eliminare')
        const index = humanIndex - 1
        this.cellar.deleteBeverage(index)
        // this.storage.saveData(this.library.publications)   
    }

//     insertWine() {
//         const cantina = prompt('Inserisci il nome della cantina');
//         const maker = prompt('Inserisci il produttore');
//         const vol = prompt('Inserisci la gradazione alcolica');
//         const dop = prompt('Inserisci anno di imbottigliamento yyyy');
//         const type = prompt('Inserisci il tipo di bevanda');

//         const beverage = new Beverage(name, maker, vol, dop, type);

//         this.cellar.addBeverage(beverage);

// }