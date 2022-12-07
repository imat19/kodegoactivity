
let stack1 = [{
  student: "Raymart",
   partner: "Axel",
},{
  student: "Joshua",
  partner: "Olave"
}, {
  student: "Mark",
  partner: "Dayot"
}
];

const stack2=[];
temp1 = stack1.pop();
temp2 = stack1.pop();
temp3=stack1.pop()
stack2.push(temp3)
stack2.push(temp1)
stack2.push(temp2)



console.table(stack1)
console.table(stack2)


C.push( A.pop())
B.push(A.pop())
B.push(C.pop())
C.push(A.pop())
A.push(B.pop())
C.push(B.pop())
C.push(A.pop())



// 1. Tower of Hanoi

function enqueue(queue, item){
  queue.push(item);
}

function dequeue(queue){
  return queue.shift();
}

const students = [
      {name: "John Doe", batch_code: "WD31"},
      {name: "Barack Obama", batch_code: "WD30"},
      {name: "James Reid", batch_code: "WD31"},
      {name: "Sam Fried", batch_code: "WD31"},
      {name: "Donald Trump", batch_code: "WD29"},
      {name: "Elon Musk", batch_code: "WD30"},
      {name: "Bryl Lim", batch_code: "WD29"},
      {name: "Morgan Freeman", batch_code: "WD29"},
      {name: "Tony Stark", batch_code: "WD30"},
  ];

function  enqueque(queque,student){
  queque.push(student);
}

function dequeque(queque){
  queque.shift();
}
const wd29 = [];

const wd30 = [];

const wd31 = [];

console.log(wd29)
console.log(wd30)
console.log(wd31)