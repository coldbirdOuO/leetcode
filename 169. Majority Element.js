/**
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.


 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length<=2){
        return nums[0]
    }
    nums.sort();
    return nums[Math.floor(nums.length/2)]
};
