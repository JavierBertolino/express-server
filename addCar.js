const { DatabaseHandler } = require('./databaseHandler');
const database = new DatabaseHandler();

async function addCar(carData) {
    console.log(carData);
    const carsList = await database.getCars();

    if (!checkForDuplicates(carsList, carData.id)) {

        try {
            carsList.push(carData);
            await database.addCar(carsList);
        } catch (e) {
            throw new Error(`Failed to create new car`);
        }
        return 'Execution success'
    } else {
        return 'Car duplicated'
    }

}


function checkForDuplicates(carsList, newCarId) {
    let duplicatesInDb = false;
    const duplicates = carsList.map(car => car.id === newCarId ? true : false);
    if (duplicates.some((item) => item === true)) {
        duplicatesInDb = true;
    }

    return duplicatesInDb
}

module.exports = {
    addCar
};