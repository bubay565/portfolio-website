function range(start, end, step){
    var arr = [];
    if(typeof step === 'undefined'){
        step = 1;
        if(end < start){
            step = -1;
        }
    } 
    if(end > start){
        for(var i = start; i <= end; i+=step){
            arr.push(i);
        }
    } else {
        for(var i = start; i >= end; i+=step){
            arr.push(i);
        }
    }
    
    return arr;
}

function sum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(range(1,10));

function reverseArray(arr){
    var newArr = [];
    for (var i = arr.length -1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    var halfLength = Math.floor(arr.length / 2);
    var tmp;
    for(var i = 0; i < halfLength; i++){
        tmp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length -1 -i] = tmp;        
    }
    return arr;
}