function myNew(constructor) {
    let obj = Object.create(constructor.prototype);
    // above line is equivalent to: 
    // let obj = {};
    // Object.setPrototypeOf(obj, constructor.prototype);
    let args = Array.from(arguments);
    constructor.apply(obj, args.slice(1));
    return obj;
}

// Example with Function Constructor
function MyFunc(name) {
    this.name = name;
}
MyFunc.prototype.getName = function () {
    return this.name;
}
let instance = myNew(MyFunc, "Sanchit");
console.log(instance.getName());

// Example with Class
class MyClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let instance2 = myNew(MyClass, "Sanchit");
// this does not work as ECMAScript spec explicitly disallows calling a class without new
console.log(instance2.getName());