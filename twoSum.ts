const twoSum2 = (nums: number[], target: number): number[] => {
    // const numsObj = nums.reduce<Record<number, number>>(
        //(result, num, i) => ({ ...result, [num]: i }), {}
    //);

    const numsObj: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const anotherIndex = numsObj[target - num];

        if (anotherIndex !== undefined && i !== anotherIndex) {            
            return [i, anotherIndex];
        }
    }
    return [];
}

console.log(twoSum2([1,2,3], 4));
