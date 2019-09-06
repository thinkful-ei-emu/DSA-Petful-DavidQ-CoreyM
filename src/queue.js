class _Node{
  constructor(value,next =null){
    this.value = value;
    this._next = next;
  }
}

module.exports = class Queue{
  constructor(){
    this.first = null;
    this.length = 0;

  }
  find(value){
    //return int, how far away from fron of the line
    //returns false if user is not found
    //linear search, O(n)

    let position = 0;
    let n =  this.first;
    while(n){
     
      position++;
      if(n.value === value)
        return position;
      n = n._next;
    }
    return false;
  }
  enqueue(value){
    if(this.first === null)
      this.first = new _Node(value);
    else{
      let n = this.first;
      while(n._next){
        n = n._next;
      }
      n._next = new _Node(value);
      this.length++;
    }
  }
  dequeue(){
    if(!this.first)
      return null;
    else{
      let first = this.first;
      this.first = this.first._next;
      this.length--;
      return first;
    }
  }
  peek(){
    if(this.first)
      return this.first.value;
    else
      return  null;
  }
};