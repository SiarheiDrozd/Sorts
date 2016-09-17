var unsortedArray = [5,6,9,2,0,4,7,5,1,121,-1,12,33,3,0,2];
// var unsortedArray = [2,1,3,4,5,6,7,8,9];

function SelectSort(arrayToSort){
    var sortedArray = arrayToSort;
    var smallestIndex = 0;
    for(var i = 0; i < sortedArray.length; i++){
        var smallestNum = sortedArray[i];
        smallestIndex = i;
        for(var j = i + 1; j < sortedArray.length; j++){
            if(smallestNum > sortedArray[j]) {
                smallestNum = sortedArray[j];
                smallestIndex = j;
            }
        }
        sortedArray[smallestIndex] = sortedArray[i];
        sortedArray[i] = smallestNum;
    }
    return sortedArray;
}

function BubbleSort(arrayToSort){
    var arr = arrayToSort;
    for(var i = 0; i < arr.length; i++){
        for(var j = arr.length - 1;j > i; j--){
            if(arr[j] < arr[j-1]){
                var buffer = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = buffer;
            }
        }
    }
    return arr;
}

function InsertSort(arrayToSort){
    var arr = arrayToSort;
    var globCount = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; arr[j] < arr[j-1]; j --){
            globCount++;
            var buffer = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = buffer;
        }
    }
    console.log(globCount);
    return arr;
}

function ShellSort(arrayToSort){
    var arr = arrayToSort;
    var size = arrayToSort.length;
    var steps = Math.floor(size/2);

    var globCount = 0;

    console.log(steps);
    console.log(arr);
    while(steps > 1){

        for(var i = 0; i < steps; i++){
            if(arr[i] > arr[i + steps]){
                globCount++;
                var buf = arr[i];
                arr[i] = arr[i + steps];
                arr[i + steps] = buf;
            }
        }
        steps = Math.floor(steps / 2);
        console.log(steps);
        console.log(arr);
    }

    for(var m = 0; m < size; m++){
        var j = m;
        var counter = 0;

        while(arr[j] >  arr[j + 1]){
            counter++;
            globCount++;
            var buff = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = buff;
            j--;
        }
        console.log(counter);
        console.log(arr);
    }

    console.log(globCount);
    return arr;
}

document.write("неотсортированный массив: " + unsortedArray);
// document.write("<br> сортировка выбором: " + SelectSort(unsortedArray));
// document.write("<br> сортировка пузырьком: " + BubbleSort(unsortedArray));
// document.write("<br> сортировка вставками: " + InsertSort(unsortedArray));
document.write("<br> сортировка Shell: " + ShellSort(unsortedArray));