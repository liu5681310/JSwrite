
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// concat + 递归
function flat(arr) {
  let arrResult = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      arrResult = arrResult.concat(arguments.callee(item));   // 递归
      // 或者用扩展运算符
      // arrResult.push(...arguments.callee(item));
    } else {
      arrResult.push(item);
    }
  });
  return arrResult;
}
console.log(flat(arr));
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
