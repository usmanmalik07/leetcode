/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let callCount = 1;
    let prevVal = 0;
    while(true){
        yield prevVal;
        [prevVal,callCount]=[callCount,prevVal+callCount]

    }
    //callCount++;
    
};


 const gen = fibGenerator();
  gen.next().value; // 0
  gen.next().value; // 1
 