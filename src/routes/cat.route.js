let route = require('express').Router();
let catQ = require('../store').catQueue;


module.exports  = route.get('/',(req,res)=>{
  console.log(catQ.peek());
  if(!catQ.peek())
    return res.status(204).json({error:'no more dogs in the pound'});
  else
    return res.status(200).json(catQ.peek());

}).get('/allcats',(req,res)=>res.json(require('../store').pets.cats));