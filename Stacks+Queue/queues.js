// Queue Can Be Array using Push and Shift Methods;

// Queue Can Be Array using Pop and Unshift Methods;

// They Need to be FIFO;

// Queue Can Be Linked List

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val){
  var  newNode = new Node(val);

    if(!this.first)
    {
      this.first = newNode;
      this.last = this.first;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }
  dequeue(){
    if(!this.first){
      return undefined;
    }else{
      var preHead = this.first;
      this.first = preHead.next;
      this.length--;
      if(this.length === 0){
        this.last = null;
      }
      return preHead;
    }
  }
}
