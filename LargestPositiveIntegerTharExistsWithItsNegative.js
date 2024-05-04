
/**
 * Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.


 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    var max = 0;
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<i;j++){
            if(nums[i]===-nums[j]){
                max = Math.max(max, Math.abs(nums[i]));
            }
            
        }
    }
    if(max===0){
        return -1;
    }
    return max;
};