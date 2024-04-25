/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count = 0;
    
        return function() {
            if(count===0){
                count++;
                return n;
            }
            else {
                n++;
                count++;
                return n;
            }
            
            
        };
        return n;
    
    };
    
    /** 
     * const counter = createCounter(10)
     * counter() // 10
     * counter() // 11
     * counter() // 12
     */