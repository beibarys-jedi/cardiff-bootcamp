const stack = []; //LIFO

stack.push(1);
stack.push(2);
stack.push(3);

// console.log(stack);

stack.pop();
// console.log(stack);

const queue = []; // FIFO

queue.push(11);
queue.push(22);
queue.push(33);
queue.shift();

// console.log(queue);

const reverse = [];
reverse.unshift(55);
reverse.unshift(66);
reverse.unshift(77);
reverse.pop();
console.log(reverse);
