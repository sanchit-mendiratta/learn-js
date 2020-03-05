function myNew(constructor) {
    var obj = Object.create(constructor.prototype);
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    constructor.apply(obj, otherArgs);
    return obj;
}

function example(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}

example.prototype.sayHi = function() {
    console.log("Hi");
}

var instance = myNew(example, "Ins1", "Ins2");

console.log(instance);
instance.sayHi();