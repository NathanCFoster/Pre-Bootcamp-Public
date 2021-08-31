var nums1 = [1,13,14,15,16,37,38,70];


function bookIndex(nums) {
    var expected = '';
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 2] == nums[i] - 2 && nums[i] - 1 == nums[i - 1]) {
            expected = expected.replace(nums[i - 1], nums[i])
        }
        else if (nums[i] - 1 == nums[i - 1]) {
            expected += '-' + nums[i] + ", ";
        }
        else if (i != nums.length - 1 && nums[i+1] != nums[i]+1) {
            expected += nums[i] + ", ";
        }
        else {
            expected += nums[i]
        }
    }
    return expected
}
console.log(bookIndex(nums1))