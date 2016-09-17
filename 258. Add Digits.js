/**
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.


 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

function eachplus(str) {
	var sum=0;
  str.forEach(function(val, index){
    sum += Number(val);
  });
  return sum
}

if(num===0) {
    return 0
} else {
    var str = num.toString().split('');
    var endpoint=100;
    while(endpoint>10) {
      endpoint= eachplus(str)
      str = eachplus(str).toString().split('');
    }
}
return eachplus(str)
};
