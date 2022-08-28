const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()) 


const {getDrain, deleteDrain, addDrain, updateDrain} = require('./controller.js')

app.get('/api/drains', getDrain)
app.delete('/api/drains/:id', deleteDrain)
app.post('/api/drains', addDrain)
app.put('/api/drains/:id', updateDrain)


app.listen(4004, () => console.log('Listening on port 4004'))