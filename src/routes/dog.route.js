let route = require('express').Router();
let dogQueue = require('../store').dogQueue;

module.exports  = route.get('/',(req,res)=>{
  if(!dogQueue.peek())
    return res.status(204).json({error:'no more dogs in the pound'});
  else
    return res.status(200).json(dogQueue.peek());

});