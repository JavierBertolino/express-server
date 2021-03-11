# express-server (1hour challenge)

- Create a Node.js server that exposes the following endpoints:
    - GET /cars
    - POST /cars

- Use REST design

- The data must be retrieved and created following the data model:
```json
{
    id: 1,
    customerId: 2,
    year: 2019,
    make: "Toyota",
    model: "Camry",
    color: "RED",
    plate: "ABC123",
    vin: "12345ABCDEFG6789"
}
```

Bonus:
Use some database so the data can presist even after the server "restarts".