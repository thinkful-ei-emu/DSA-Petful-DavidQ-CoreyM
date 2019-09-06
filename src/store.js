let fetch = require('node-fetch');
let store={ users:[

],
pets:{
  dogs:[{
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Sherlock',
    sex: 'Female',
    age: 5,
    breed: 'Golden Retriever',
    story: 'Owner in Jail'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Sonic',
    sex: 'Male',
    age: 3,
    breed: 'chocolate Retriever',
    story: 'Owner digi-volved'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Posideon',
    sex: 'Male',
    age: 8,
    breed: 'chuachua',
    story: 'Moved to bottom of ocean'
  }],
  cats:[{
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Neko',
    sex: 'Female',
    age: 2,
    breed: 'Tabi',
    story: 'Went super-sayian 3'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Ahiri',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Became a "real boy"'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Ichigo',
    sex: 'male',
    age: 1,
    breed: 'Bengal',
    story: 'UnLocked banKai'
  }]
}
};

let Queue = require('./queue');


const userQueue = new Queue();

const dogQueue = new Queue();
const catQueue = new Queue();
for(let x = 0; x < 4;x++){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then((dog)=>{
      store.pets.dogs[x].imageURL = dog.message;
      catQueue.enqueue(store.pets.cats[x]);
      dogQueue.enqueue(store.pets.dogs[x]);
    });
  
}

module.exports = {userQueue,dogQueue,catQueue};