// import express
const express = require("express");
const budget = require("./models/budget.js");
const app = express();
const port = 3000;

// import data model
const budgets = require('./models/budget.js')

//   Middleware
// Adds form data to req.body so we can access it in the CREATE action:
app.use(express.urlencoded({
    extended: false
}));
// start making and calling routes
// Index
app.get('/budget', (req, res) => {

    res.render('index.ejs', {
        allBudget: budgets
    })
})
// New
app.get("/budget/new", (req, res) => {
    res.render('new.ejs');
});

// create
app.post('/budget', (req, res) => {
    budgets.push(req.body)
    res.redirect('/budget')
});

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