// function twoSum(nums,target){
//     for(let i =0;i<nums.length-1;i++){
//         for (let j = i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }
//     }
//     return null;
// }
function twoSum(nums, target) {
    nums.sort((a,b)=>a-b);
    const original = nums.slice();
    let max = nums.length - 1;
    for (let i = 0; i < nums.length && max >= 0;) {
        if (nums[i] + nums[max] > target) {
            max--;
        }
        else if (nums[i] + nums[max] < target) {
            i++;
        } else {
            if(nums[i]===nums[max]){
                return [original.findIndex(x=>x===nums[i]),secondOccurance(nums,nums[max])];
            }
            return [original.findIndex(x => x === nums[i]), original.findIndex(x => x === nums[max])].sort();
        }
    }
    return [];
}
function secondOccurance(array,num){
    // This function is used to find second occurance of a number in a given array
        let occurance = 0;
        for(let i = 0;i<array.length;i++){
            if(array[i]===num){
                occurance++;
            }
            if(occurance===2){
                return i;
            }
        }
        return [];
}
console.log(twoSum([-1,-2,-3,-4,-5],-8));