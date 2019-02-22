Function.prototype.myBind = function() {
    if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var context = arguments[0];
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    var fnToBind = this;
    var fnBound = function() {
        otherArgs = otherArgs.concat(Array.prototype.slice.call(arguments, 0));
        fnToBind.apply(context, otherArgs);
    };
    fnBound.prototype = fnToBind.prototype;
    return fnBound;
}

function example(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}
example.prototype.sayHi = function() {
    console.log("Hi");
}

var randomObject = {
    say: "hello"
};

var newFunction = example.myBind(randomObject, "Arg1");

newFunction("Arg2");

var instance1 = new example("Ins1", "Ins2");
instance1.sayHi();
var instance2 = new newFunction("2Ins1", "2Ins2");
instance2.sayHi();