Function.prototype.myCall = function(context){
    let args = [...arguments].slice(1)
    let result = null
    context = context || globalThis;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

value = 2;
let foo = {
    value:1,
}

let bar = function(name,age){
    console.log(name,age,this.value);
}

bar.myCall(foo,'HearLing',18)
bar.myCall(null,'HearLing',18)