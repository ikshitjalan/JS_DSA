class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
  var  newNode = new Node(val);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop(){
    if(!this.head){
      return undefined;
    }else{
      var current = this.head;
      var newTail = current;
      while(current.next)
      {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current;

    }
  }
  shift(){
    if(!this.head){
      return undefined;
    }else{
      var preHead = this.head;
      this.head = preHead.next;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      return preHead;
    }
  }
  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i){
    if((i<0)||(i>=this.length)){
      return null;
    }
    var count = 0;
    var current = this.head;
    while(count!==i){
      current = current.next;
      count++;
    }
    return current;

  }
  set(i,val){
    var value = this.get(i);
    if(!value){
      return false;
    }
    value.val = val;
    return true;
  }
  insert(i,val){
    if(i<0||(i>this.length))
    {
      return false;
    }

    else if (i===0) {
      return this.unshift(val);
      this.length++;

    }else if (i===this.length) {
      return this.push(val);
      this.length++;

    }else{
      var newNode = new Node(val);
      var preNode = this.get(i-1);
      var temp = preNode.next;
      preNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return this;
    }
  }
  remove(i){
    if(i<0||(i>=this.length)){
      return undefined;
    }
    else if (i===0) {
       return this.shift();
       this.length--;
    }else if (i===(this.length-1)) {
      return this.pop();
      this.length--;
    }else{
      var preNode = this.get(i-1);
      var nextNode = this.get(i+1);
      var currentNode = this.get(i);
      var temp = currentNode.next;
      preNode.next = temp;
      this.length--;
      return currentNode;

    }

  }
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var pre =null;
    for(var i=0;i<this.length;i++){
      next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    }
    return this;
  }

}

var list = new singlyLinkedList();
list.push("Ikshit");
list.push('Jalan');
list.push('HAHAHAH');
console.log(list);


var deleted = list.pop();
console.log(list);
console.log("Deleted Element is :",deleted);

var shifted = list.shift();
console.log("Removed Element is:",shifted);
console.log(list);

var unshifted = list.unshift("My name is :");
console.log(unshifted);

var result = list.get(1);
console.log(`Demanded Node :`,result);

list.set(1,"Master");
console.log(list);


var result = list.insert(0,"hii");
console.log(result);
var result = list.insert(1,'Ikshit');
console.log(result);
var result = list.insert(list.length,"The End");
console.log(result);

var result = list.remove(1);
console.log("Removed Element:",result);
console.log(list);
var result = list.remove(2);
console.log("Removed Element:",result);
console.log(list);

var result = list.insert(2,"Test");

var result = list.reverse();
console.log(result);
