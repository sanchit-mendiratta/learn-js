function MyFunc(name) {
    this.name = name;
}
MyFunc.prototype.getName = function () {
    return this.name;
}

var abc = myNew(MyFunc, "Sanchit");
console.log(abc.getName());

function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}
