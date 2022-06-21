let arr1 = [
    {name:'zhangsan',age:18,sex:'man'},
    {name:'lisi',age:20,sex:'female'},
    {name:'wangwu',age:24,sex:'manx'}
]
let result = [];
result.push(Object.keys(arr1[0]))
let newArr = arr1.map(item =>{
    return [item.name,item.age,item.sex]
})
result.push(...newArr)
console.log(result);