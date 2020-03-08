$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function (data) {
        console.log("ajax:" + JSON.stringify(data));
    }
});
Promise.resolve().then(() => console.log("promise1"));
console.log("1");
setTimeout(() => console.log("settimeout"), 45);
console.log("2");
Promise.resolve().then(() => console.log("promise2"));
