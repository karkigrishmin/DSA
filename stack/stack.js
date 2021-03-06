class Stack {
	constructor() {
		this.a = [];
		this.top = -1;
	}

	push(x) {
		this.top += 1;
		this.a[this.top] = x;
		console.log(`${x} added to ${this.top}`);
		return this.top;
	}

	pop() {
		if (this.top === -1) {
			console.log("stack is empty");
		} else {
			console.log(`${this.a[this.top]} is removed`);
			this.top -= 1;
		}
	}

	peek() {
		if (this.top === -1) {
			console.log("stack is empty");
		}
		console.log(`${this.a[this.top]} is top element`);
	}

	isEmpty() {
		if (this.top === -1) {
			console.log("stack is empty");
		}
		console.log("stack is not empty");
	}

	print() {
		for (let i = 0; i <= this.top; i++) {
			console.log(this.a[i]);
		}
	}
}

const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

stack.pop();
stack.pop();

stack.peek();

stack.isEmpty();

stack.print();
