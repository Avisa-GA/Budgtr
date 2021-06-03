

const express = require("express");
const app = express();
const port = 3000;

const models = require('./models/budget.js')



app.get('/budget', (req, res) => {
    res.send('HEllo World!')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })