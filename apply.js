Function.prototype.myApply = function(context,arr){
    context = context || globalThis;
    context.fn = this;
   
    const result = context.fn(...arr)
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

bar.myApply(foo,['HearLing',18])
bar.myApply(null,['HearLing',18])