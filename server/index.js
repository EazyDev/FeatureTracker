const express = require('express');
const morgan = require('morgan'); // documentation check
const parser = require('body-parser');
const mongoose = require('mongoose'); // MongoDB
const app = express();
const port = 3000;

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(morgan('dev'));


app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

const feature = require('./routes/feature');

mongoose.connect("mongodb+srv://Salman:qwerty123@victorcluster-6cqju.mongodb.net/test?retryWrites=true",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Atlas is connected");
    }
});

app.use('/feature',feature);



app.listen(port,function(){
    console.log(`Server listening on ${port}`);
});
