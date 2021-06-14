// o(n^2) solution 
// finding every subarray
// let maxSubArray = function (nums) {
//     let max = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         let current = 0;
//         for (let j = i ; j < nums.length; j++) {
//             current+= nums[j];
//             if(current > max){
//                 max = current;
//             } 
//         }
//     }
//     return max;
// };

// o(n) solution

let maxSubArray = function (nums){
    let current = nums[0];
    let max = nums[0];
    for(let i = 1;i<nums.length;i++){
        if(current < 0){
            current = nums[i];
        }else{
            current +=nums[i];
        }
        if(current >max){
            max = current;
        }
    }
    return max;
}

