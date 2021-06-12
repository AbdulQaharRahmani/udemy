function twoSum(nums,target){
    for(let i =0;i<nums.length-1;i++){
        for (let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
    return null;
}
// function twoSum(nums, target) {
//     const original = nums.slice();
//     let max = nums.length - 1;
//     for (let i = 0; i < nums.length && max >= 0;) {
//         if (nums[i] + nums[max] > target) {
//             max--;
//         }
//         else if (nums[i] + nums[max] < target) {
//             i++;
//         } else {
//             return [original.findIndex(x => x === nums[i]), original.findIndex(x => x === nums[max])];
//         }
//     }
//     return null;
// }

console.log(twoSum([3, 2, 4], 6));