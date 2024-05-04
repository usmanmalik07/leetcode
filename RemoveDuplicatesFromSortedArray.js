/**
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                
                nums.splice(i,1);
                removeDuplicates(nums);
        }
        
       
    }}};