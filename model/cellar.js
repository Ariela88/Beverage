class Cellar {

    constructor(beveragesArray = []) {
        this.beveragesArray = beveragesArray
    }

    addBeverage(bev) {

        this.beveragesArray.push(bev)

    }

    deleteBeverage(index) {

        this.beveragesArray = this.beveragesArray.filter((_, i) => i !== index)


    }
    get beverageCount() {
        const count = this.beveragesArray.length
        return count

    }

    getAllBeveragesCard() {

        let beverageCards = '';

        for (let i = 0; i < this.beveragesArray.length; i++) {
            const bev = this.beveragesArray[i];
            const humanIndex = i + 1;
            beverageCards += humanIndex + ') ' + bev.toString()
            beverageCards += '------------------------------------\n'

        }
        return beverageCards

    }


    static fromDbObjects(data) {

        const tempArray = []

        for (const gO of data) {


            if (gO.vine) {
                const wine = new Wine(gO.name, gO.vol, gO.region, gO.type, gO.maker, gO._dop, gO.vine);
                tempArray.push(wine);

            } else {
                const beer = new Beer(gO.name, gO.vol, gO.region, gO.type, gO.malt, gO.style);
                tempArray.push(beer);
            }

        }

        const newCellar = new Cellar(tempArray);
        return newCellar;


    }



}