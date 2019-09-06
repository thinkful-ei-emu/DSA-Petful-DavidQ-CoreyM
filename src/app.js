const app = require('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const {NODE_ENV} = require('./config');

const morganOptions = 'common';

app.use(helmet());
app.use((err, req, res, next)=>{
  let response;
  if(NODE_ENV === 'production'){
    console.log(err);
    response = {error:{message:'Critical Server Error'}};
  }else{
    response = {error:{message:err.message,err}};
  }
  res.status(500).json(response);
});
app.use(cors());
app.use(morgan(morganOptions));
//route imports
let dogRoute = require('./routes/dog.route');
let catRoute = require('./routes/cat.route');


//routes
app.get('/',(req,res)=>{
  res.status(200).send('Hello World');
});
app.use('/api/dog',dogRoute);
app.use('/api/cat',catRoute);

module.exports = app;