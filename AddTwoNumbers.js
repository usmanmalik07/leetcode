/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead; 
    let carry = 0;
    
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0; 
        let y = (l2 !== null) ? l2.val : 0; 
        let sum = carry + x + y;
        
        carry = Math.floor(sum / 10); 
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};
