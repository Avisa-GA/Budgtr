
// import express
const express = require("express");
const budget = require("./models/budget.js");
const app = express();
const port = 3000;

// import data model
const models = require('./models/budget.js')


// start making and calling routes
app.get('/budget', (req, res) => {
   
    res.render('index.ejs', {
        allBudget: budget
    })
})

// listening to port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })