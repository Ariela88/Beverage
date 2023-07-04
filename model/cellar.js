// Library

class Cellar {

    constructor(beveragesArray = []){
        this.beveragesArray = beveragesArray;
    }
    
    addBeverage(bev) {

        this.beveragesArray.push(bev)

    }

    deleteBeverage(index) {

        this.beveragesArray = this.beveragesArray.filter((_, i) => i !== index)

    
    }

    getAllBeverageCard() {

        let beverageCards = '';

        for (let i = 0; i < this.beveragesArray.length; i++) {
            const pub = this.beveragesArray[i];
            const humanIndex = i + 1;
            beverageCards += humanIndex + ') ' + pub.toString()
            beverageCards += '------------------------------------\n'

        } return beverageCards
    }
    

}