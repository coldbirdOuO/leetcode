/**
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var test=[];
    for(var i=0;i<nums.length;i++) {
    	if(test.indexOf(nums[i])==-1) {
      	    test.push(nums[i])
      } else{
          return true
      }
    }
    return false
};
