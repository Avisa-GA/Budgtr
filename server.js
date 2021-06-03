
// import express
const express = require("express");
const budget = require("./models/budget.js");
const app = express();
const port = 3000;

// import data model
const budgets = require('./models/budget.js')


// start making and calling routes
app.get('/budget', (req, res) => {
   
    res.render('index.ejs', {
        allBudget: budgets
    })
})

// show 
app.get('/budget/:indexOfBudgetsArray', (req, res) => {
    res.render('show.ejs', { 
        budget: budgets[req.params.indexOfBudgetsArray] 
      });
})

// listening to port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })