var obj = {
    'name': 'jane',
    'last_name': 'doe',
    'profession': 'engineer',
    'characteristics': {
        'intelligent': true,
        'punctual': false,
        'experience': {
            '2012': 'college passout',
            '2014': 'mba passout',
            '2016': 'employed'
        }
    }
}
console.log(obj);

function copyObj(obj, parentElement = '') {
    var newObj = {};
    var aKeys = Object.keys(obj);
    for (var i = 0; i < aKeys.length; i++) {
        if (typeof obj[aKeys[i]] === "object") {
            newObj[aKeys[i]] = copyObj(obj[aKeys[i]]);
        } else if (!newObj[aKeys[i]]) {
            newObj[aKeys[i]] = obj[aKeys[i]];
        }
    }
    return newObj;
}

console.log(copyObj(obj));
var obj2 = obj;
if (obj === obj2) console.log("Yes1");
if (obj === copyObj(obj)) console.log("Yes");

var newObj = {};
function flattenObj(obj, parentKey) {
    var aKeys = Object.keys(obj);
    var key = "";
    for (var i = 0; i < aKeys.length; i++) {
        if (typeof obj[aKeys[i]] === "object") {
            flattenObj(obj[aKeys[i]], parentKey ? : aKeys[i])
        } else {
            newObj[aKeys[i]] = obj[aKeys[i]];
        }
    }
}
