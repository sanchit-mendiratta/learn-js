var threeSum = function(nums) {
    let results = [];
    if(nums.length < 3) return results;
    let map = {};
    let map2 = {};
    let len = nums.length;
    for(let j=0;j<len;j++) {
      for(let i=0;i<nums.length;i++) {
          if(i == j) continue;
          let key = (-1 * nums[j]) - nums[i];
          map[key] = nums[i];
      }
      //console.log(map);
      for(let i=0;i<nums.length;i++) {
         if(i == j) continue;
          if(map.hasOwnProperty(nums[i])) {
            let result = [nums[j], nums[i], map[nums[i]]];
            map2[result.sort().join('')] = true;
          }
      }
      console.log(map2);
      nums.shift();
    }
    for (const key in map2) {
      results.push(key.split(/(-\d|\d)/).filter((el) => el != ''));
    }
    return results;
};

threeSum([3,0,-2,-1,1,2]);
