const express = require('express');
const port = 3000;
const expressLayout = require('express-ejs-layouts');

const app = express();
app.use(expressLayout);

const db = require('./config/mongoose');

// all Middleware use in app
app.use(express.urlencoded());
app.use('/', require('./routes/index'));
app.use(express.static('./assets'));  // for use Static file
app.set('view engine', 'ejs');
app.set('views', 'views');

app.set('layout extractScripts',true);
app.set('layout extractStyles',true);




// server is running successfully or not on PORT:3000
app.listen(port, (err)=> {
    if(err) {
        console.log(`Error in running on Port : ${port}`);
        return;
    }

    console.log(`Server is Running on Port: ${port}`);
})