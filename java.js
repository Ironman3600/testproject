let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

let n = myArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    let currentValue = myArray.splice(i, 1)[0];  // splice returns an array

    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            insertIndex = j;
        }
    }

    myArray.splice(insertIndex, 0, currentValue); // insert at correct position
}

console.log("Sorted array:", myArray);
