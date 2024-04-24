/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }
    
    let T = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        T[i] = T[i - 1] + T[i - 2] + T[i - 3];
    }
    
    return T[n];
}; 
