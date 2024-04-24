/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const a= init;
    let b=1;
    return {
    increment: function(){
        return init+=b;
    },
    decrement: function(){
        return init-=b;
    },
    reset: function(){
       init=a;
       return init;
    }
    
    }
   
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
 