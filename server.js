// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const budget = require("./models/budget.js");
const app = express();
const port = 3000;


// =======================================
//              DATABASE
// =======================================
const budgets = require('./models/budget.js')

// =======================================
//              MIDDLEWARE
// =======================================
// Adds form data to req.body so we can access it in the CREATE action:
app.use(express.urlencoded({
    extended: false
}));
// =======================================
//              ROUTES
// =======================================

app.get('/', (req, res) => {
    res.send('Welcome to Budgtr App!')
})

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

// CREATE
app.post('/budget', (req, res) => {
    budgets.push(req.body)
    res.redirect('/budget')
});

// SHOW ROUTE
app.get('/budget/:indexOfBudgetsArray', (req, res) => {
    res.render('show.ejs', {
        budget: budgets[req.params.indexOfBudgetsArray]
    });
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})