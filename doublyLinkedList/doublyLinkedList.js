class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(!this.head)
    {
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    var removed = this.tail;
    if(!this.head){
      return undefined;
    }else if (this.length === 1) {

      this.head = null;
      this.tail = null;
    }else{

      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift(){
    var oldHead = this.head;
    if(!this.head){
      return undefined;
    }else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;

  }
  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;

    }
    this.length++;
    return this;
  }
  get(i){
    if(i==0||(i>=this.length)){
      return undefined;
    }else if (i<=(this.length/2)) {
       var count = 0;
      var current = this.head;
      while(count!=i){
        current = current.next;
        count++;
      }
      return current;
    }else{
       var count = this.length-1;
      var current = this.tail;
      while(count!=i){
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(i,val){
    var value = this.get(i);
    if(!value){
      return undefined;
    }
    value.val = val;
    return this;
  }
  insert(i,val){
    var newNode = new Node(val);
    if(i<0||i>this.length){
      return undefined;
    }else if (i===0) {
        return this.unshift(val);
    }else if (i=== this.length ) {
      return this.push(val);
    }else{
      var preNode = this.get(i-1);
      var temp = preNode.next;
      preNode.next = newNode;
      newNode.prev = preNode;
      newNode.next = temp;
      temp.prev = newNode;
      return this;
    }
    this.length++;
  }
  remove(i){
    if(i<0||i>=this.length){
      return umdefined;
    }
    else if (i===0) {
      return this.shift();
    }else if (i===this.length-1) {
      return this.pop();
    }else{
      var removed = this.get(i);
      var preNode = removed.prev;
      var nextNode = removed.next;
      preNode.next = nextNode;
      nextNode.prev = preNode;
      removed.next = null;
      removed.prev = null;
      return this;
    }
    this.length--;
  }
}

var list = new DoublyLinkedList();
list.push(66);
console.log(list);
list.push(99);
list.push(50);
list.push(122);
console.log(list);

var result = console.log(list.pop());
console.log(list);

var result = console.log(list.shift());
console.log(list);

list.unshift(45);
console.log(list);

var result = console.log("Node is:",list.get(1));

list.set(2,"hi");
console.log(list);

list.insert(2,"ikshit");
console.log(list);

list.remove(2);
console.log(list);
