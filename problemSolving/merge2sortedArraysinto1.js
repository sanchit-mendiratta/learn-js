function merge(left, right) {
    var merged = [];
    while (left.length > 0 || right.length > 0) {
        if (left.length > 0) {
            var val1 = left.shift();
        }
        if (right.length > 0) {
            var val2 = right.shift();
        }
        if (val1 && val2) {
            if (val1 < val2) {
                merged.push(val1);
                val1 = null;
                right.unshift(val2);
            } else {
                merged.push(val2);
                val2 = null;
                left.unshift(val1);
            }
        } else if (val1) {
            merged.push(val1);
        } else {
            merged.push(val2);
        }
    }
    return merged;
}

console.log(merge([1, 2, 3], [4, 5, 6]));
