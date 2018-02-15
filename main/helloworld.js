let hello = 'Hello world';

hello;

let list = ['car', 'apple', 'mobile'];

list.forEach(data => {
    data;
});

let a = 1;
a += 2;

list.push(a);

const foo = (a, b) => {
    return a + b;
};

let person = {
    name: 'Filip',
    getName() {
        return this.name;
    }
};

console.log(`ahoj ja som ${person.name} a moj vypocet je 2 + 2 = ${foo(2, 2)}`);