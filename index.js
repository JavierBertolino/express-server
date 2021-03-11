var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const { DatabaseHandler } = require('./databaseHandler');
const { addCar } = require('./addCar');

const database = new DatabaseHandler();

app.use(bodyParser.json());

app.get('/cars', async (req, res) => {
    const carList = await database.getCars();
    console.log(carList)
    res.send(carList);
});

app.post('/cars', async (req, res) => {
    await addCar(req.body);
    res.send('Car created!')
});


app.listen(3000, function () {
    console.log('Listening on port 3000.');
});
