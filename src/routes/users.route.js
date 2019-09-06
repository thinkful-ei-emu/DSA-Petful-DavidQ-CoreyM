let route = require('express').Router();
let parse = require('express').json();
let userQueue = require('../store').userQueue;

module.exports  = route.post('/',parse,(req,res)=>{// add user to queue
  //todo check if the user is already in queue
  let {user} = req.body;
  if(user){
    userQueue.enqueue(user);
    console.log(userQueue);
    return res.status(201).json({position:userQueue.find(user)});
  }
  else{
    return res.status(400).json({error:'must include user'});
  }

}).get('/position',parse,(req,res)=>{
  let {user} = req.body;
  console.log(user);
  if(!user)
    return res.status(400);
  let position = userQueue.find(user);
  if(position)
    return res.status(200).json({user,position});
  else
    return res.status(404).json({error:'user not found'});

  
});