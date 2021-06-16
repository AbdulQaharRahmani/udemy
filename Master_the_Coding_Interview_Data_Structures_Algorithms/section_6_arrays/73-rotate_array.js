let rotate = function(nums, k) {
    k = k % nums.length; // Remove a complete Circle

    let queue = []; 

    for(let i = nums.length - k;i<nums.length;i++){
        queue.push(nums[i]);
    }
    
    for(let i = 0,j=0;i<nums.length;i++){
        queue.push(nums[i]);
        nums[i] = queue[j++];
    }
};