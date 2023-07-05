class Storage {

     static saveData(data) {

        const dataString = JSON.stringify(data)
        localStorage.setItem('beverage', dataString)
    }

    static loadData() {

        const dataString = localStorage.getItem('beverage')

        if (dataString) {
            const data = JSON.parse(dataString);
            return data

        }

        return null;
    }

}
