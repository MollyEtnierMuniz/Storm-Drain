const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()) 


const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(4004, () => console.log('Listening on port 4004'))