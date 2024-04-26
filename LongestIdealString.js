var longestIdealString = function(s, k) {
    const n = s.length;
    const lastOccurrence = new Map();
    let maxLen = 1; // Initialize with 1 as the minimum length of ideal string is 1
    let count = 1; // Count of the current ideal string length
    
    for (let i = 0; i < n; i++) {
        const charCode = s.charCodeAt(i);
        // Find the last occurrence of the character
        const lastIdx = lastOccurrence.get(charCode) || -1;
        // Calculate the length of the substring between the current position and the last occurrence
        const diff = i - lastIdx;
        if (diff <= k) {
            count++;
        } else {
            count = 1;
        }
        maxLen = Math.max(maxLen, count);
        // Update the last occurrence of the character
        lastOccurrence.set(charCode, i);
    }
    
    return maxLen;
};