/**
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var b=0;
    for(var i=0;i<s.length;i++) {
    	if((s.charCodeAt(i)-64)%26!==0){
    		b=b*26+((s.charCodeAt(i)-64)%26)
      } else {
      	b=b*26+((s.charCodeAt(i)-64)%26+26)
      }
    }
    return b
};
