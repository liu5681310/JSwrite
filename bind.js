Function.prototype.myBind = function(context){
    var args = [...arguments].slice(1),
    fn = this;
    return function Fn(){
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(arguments)
        )
    }
}

value = 2

let foo = {
  value: 1,
}

let bar = function (name, age) {
  console.log(name, age, this.value)
}
let fn = bar.myBind(foo, 'HearLing', 18)

let a = new fn()
console.log(a.__proto__)
