let moveZeroes = function (nums) {
    let startIndex = nums.findIndex(x=>x===0);
    let nonZeroes = [];
    let zeroes = 1;
    if (startIndex >= 0 && nums.length-1 > startIndex) {
        // Find all non zeroes elements after first occurrance of zeroes
        for (let i = startIndex + 1; i < nums.length; i++) {
            if(nums[i]!==0){
                nonZeroes.push(i);
            }else{
                zeroes++;
            }
        }
        // start from first zero and change it with next non zero
        for(let i = startIndex , j = 0; i<nums.length && j<nonZeroes.length;i++,j++){
            nums[i] = nums[nonZeroes[j]];
        }
        // apppend zeroes at end of array
        for(let i = nums.length-zeroes;i<nums.length;i++){
            nums[i]=0;
        }
    }
};

moveZeroes([1,3,0,0,5,3,0,2]);