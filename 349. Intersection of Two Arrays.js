/**
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].


 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var count=[];
    for(var i=0;i<nums1.length;i++) {
        for(var j=0;j<nums2.length;j++) {
            if(nums2[j]===nums1[i])
                count.push(nums2[j])
        }
    }
    var ans=[];
    for(var m=0;m<count.length;m++) {
        if(ans.indexOf(count[m])===-1 && count[m]!=='') {
            ans.push(count[m])
        }
    }
    return ans
};
