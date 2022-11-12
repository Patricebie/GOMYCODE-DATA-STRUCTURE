function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
    let elt = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > elt; j--) {
        arr[j + 1] = arr[j];
    }
    }
    return arr;}
    let arr = prompt();
    console.log(insertionSort(arr));