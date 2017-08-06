/**
 * @desc 
 * 将数组中的每一项加一
 */

const arr = [1,2,3,4,5];

/**@desc 命令式写法 */
for(let i = 0; i < arr.length; i++) {
  arr[i] += 1;
}

console.log(arr);

/**@desc 声明式写法 */
const addOne = (i) => i + 1;
console.log(arr.map(addOne));
