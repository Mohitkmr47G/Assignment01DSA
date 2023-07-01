var twoSum = function(nums, target) {
    let storage = {}
    for(let [index, num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index]
        storage[target - num] = index
    }
};
// second Solution :)
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = i
    }
    for(let i = 0; i < nums.length; i++){
        let curr = target - nums[i]
        if(obj[curr] && i != obj[curr]) return [i,obj[curr]]
    }
};