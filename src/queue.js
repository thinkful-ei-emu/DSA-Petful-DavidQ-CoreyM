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
  enqueue(value){
    if(!this.first)
      this.first = new _Node(value);
    else{
      let n = this.first;
      while(!n._next){
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
}