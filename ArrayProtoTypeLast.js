/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    var a = -1;
    if (this.length===0){
         return a;
    }
    else{
        return this[this.length-1];
    }
};


 const arr = [];
 arr.last(); // 3
