const findExactPath = (nums, target, start, end) => {
    let mid =  Math.floor(start + (end - start) / 2);
    
    while(start < end) {
        if(nums[mid] == target) return mid; 
        else if(nums[mid] < target) start = mid + 1; 
        else end = mid ;  

        mid =  Math.floor(start + (end - start) / 2);
    }

    return mid;
}
var searchInsert = function(nums, target) {
   let n = nums.length;

   if(n == 1 && nums[0] == target) return 0;

   const path = findExactPath(nums, target, 0, n);

   return path;
};