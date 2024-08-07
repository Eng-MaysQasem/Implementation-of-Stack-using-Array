//implemantation of stack using array
class Stack{
    constructor(){
        //intiate arr in constructor
        this.items=[];
    }
    
    push(val){
        //push we use push method in array(to addlast)
        this.items.push(val);
    }
    pop(){
        if(this.items.length==0){
            console.log("stack is empty");
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length==0;
    }
    print(){
        var top=this.items.length-1;
      while(top>=0){
            console.log(this.items[top]);
            top --;
        }
      
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}
var s=new Stack();
s.push(10);
s.push(20);
s.push(30);
s.print();
console.log(s.peek());//30
s.pop();//delete 30
s.print();//20 10
console.log(s.isEmpty());//false
s.pop();
s.pop();
console.log(s.isEmpty());//true

