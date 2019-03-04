// Stacks Can Be Array using Push and Pop Methods;

// Stacks Can Be Array using Shift and Unshift Methods;

// They Need to be LIFO;

// Stacks Can Be Linked List

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
  pop(){
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
  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      newNode.next = this.head;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

}
