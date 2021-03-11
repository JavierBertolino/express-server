const csvTojson = require('csvtojson');
const ObjectsToCsv = require('objects-to-csv');

class DatabaseHandler {
    async addCar(data) {
        const csv = new ObjectsToCsv(data);
        try {
            await csv.toDisk(`./cars.csv`);
        } catch (e) {
            console.log('Data already created');
        }
    }

    async getCars() {
        let data;
        try {
            console.log('path', __dirname);
            data = await csvTojson().fromFile(`./cars.csv`);
        } catch (e) {
            console.log('get', e);
            data = [];
        }

        return data;
    }
}

module.exports = {
    DatabaseHandler
};