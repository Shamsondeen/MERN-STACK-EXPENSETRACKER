const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');


// Using dotENV
dotenv.config({ path: './config/config.env'});


// Connecting DataBas
connectDB();


// Transc Route
const transactions = require('./routes/transc')


// Using Express
const app = express();

// Using BodyParser
app.use(express.json());


// USING MORGAN
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.use('/api/v1/transactions', transactions);








// Server Port
const PORT = process.env.PORT || 5000


app.listen(PORT,
    console.log(`Server Started on ${PORT}`))