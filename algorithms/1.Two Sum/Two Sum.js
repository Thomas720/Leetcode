/**
 * 排序法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    var sortArray = nums.slice().sort((a, b) => a - b);

    var i = 0, j = sortArray.length - 1;

    while (i < j && sortArray[i] + sortArray[j] != target) {

        const addNum = sortArray[i] + sortArray[j];

        if (addNum > target) {
            j--;
        }

        else {
            i++;
        }
    }

    var preIndex = nums.indexOf(sortArray[i]);
    var endIndex = nums.indexOf(sortArray[j]);

    if (endIndex === preIndex) {
        endIndex = nums.indexOf(sortArray[j], preIndex + 1);
    }

    return [preIndex, endIndex];
};