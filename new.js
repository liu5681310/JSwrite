function myNew(fn,...args){
    const obj = Object.create(fn.prototype)//创建新对象obj//把对象的__proto__指向构造函数的prototype 实现继承
    const result = fn.apply(obj,args)//执行构造函数，传递参数，改变this指向（为这个新对象添加属性）
    return result instanceof Object ?result:obj  //判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
}

function Person(name,age){
    this.name = name
    this.age = age
}
let p = myNew(Person,'布兰',12)
console.log(p);