// Library

class Cellar {

    constructor(beveragesArray = []) {
        this.beveragesArray = beveragesArray;
    }

    addBeverage(bev) {

        this.beveragesArray.push(bev)

    }

    deleteBeverage(index) {

        this.beveragesArray = this.beveragesArray.filter((_, i) => i !== index)


    }

    getAllBeveragesCard() {

        let beverageCards = '';

        for (let i = 0; i < this.beveragesArray.length; i++) {
            const bev = this.beveragesArray[i];
            const humanIndex = i + 1;
            beverageCards += humanIndex + ') ' + bev.toString()
            beverageCards += '------------------------------------\n'

        } return beverageCards
    }

    // fromDbObjects(card) {

    //     for (const genericObject of card) {

    //         const beverage = new Beverage(genericObject.name, genericObject.maker,
    //             genericObject.vol, genericObject.type, genericObject.vine, genericObject.region)
    //         this.beverage.push(beverage)

    //     }



    // }


}