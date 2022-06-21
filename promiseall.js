//使用场景：多个请求结果合并在一起，通过结果渲染页面
Promise.myPromiseAll = function(promises){
    return new Promise((resolve,reject)=>{
        let result=[]
        let count = 0
        promises.forEach((promise,index)=>{
            promise.then((res)=>{
                result[index]=res;
                count++;
                if(count === promises.length) 
                resolve(result)
            },(err)=>{
                reject(err)
            })
        })
    })
}

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('p1 resolved')
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('p2 resolved')
    },2000)
})

Promise.myPromiseAll([p1,p2]).then(res =>{
    console.log(res);
})