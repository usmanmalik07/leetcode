/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
         return x;
     }
 
     let left = 1;
     let right = Math.floor(x / 2);
     let result = 0;
     while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         const midSquared = mid * mid;
         if (midSquared === x) {
             return mid;
         } else if (midSquared < x) {
             left = mid + 1;
             result = mid; 
         } else {
             right = mid - 1;
         }
     }
 
     return result;
 };