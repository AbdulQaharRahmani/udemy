function mergeSortedArrays(arr1,arr2){
    const answer = [];
    let arrow1 = 0;
    let arrow2 = 0;
    while(arrow1<arr1.length&&arrow2<arr2.length){
        if(arr1[arrow1] < arr2[arrow2]){
            answer.push(arr1[arrow1++]);
        }else{
            answer.push(arr2[arrow2++]);
        }
    }
    while(arrow1<arr1.length){
        answer.push(arr1[arrow1++]);
    }
    while(arrow2<arr2.length){
        answer.push(arr2[arrow2++]);
    }
    return answer;
}

console.log(mergeSortedArrays([1,2,5,9],[]));