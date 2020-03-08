let arr = [85, 47, 69, 99, 37, 2, 50, 22, 330, 39];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function BubbleSort(arr) {
    let swap = false;
    let i = 0;
    do {
        swap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                swap = true;
            }
        }
    } while (swap);
    console.log(arr);
}

BubbleSort(arr2);
