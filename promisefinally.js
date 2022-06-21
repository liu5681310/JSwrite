Promise.myPromiseFinally = function(callback){
    return this.then.apply(function(value){
        return Promise.resolve(callback()).then(function(){
            return value
        })
    },function(err){
        return Promise.resolve(callback()).then(function(){
            throw err
        })
    })
}