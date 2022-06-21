function debounce(fn,wait){
    let timer = null;
    return function(){
        let args = arguments,
        context = this;
        if(timer){
            clearTimeout(timer);
            timer = null
        }
        timer = setTimeout(()=>{
            return fn.apply(context,args)
        },wait)
    }
}