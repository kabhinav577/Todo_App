const express = require('express');
const port = 3000;

const app = express();

const db = require('./config/mongoose');

// all Middleware use in app
app.use(express.urlencoded());
app.use('/', require('./routes/index'));
app.use(express.static('./assets'));  // for use Static file

app.set('view engine', 'ejs');
app.set('views', 'views');


// server is running successfully or not on PORT:3000
app.listen(port, (err)=> {
    if(err) {
        console.log(`Error in running on Port : ${port}`);
        return;
    }

    console.log(`Server is Running on Port: ${port}`);
})