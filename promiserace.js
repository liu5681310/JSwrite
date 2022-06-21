//使用场景：请求超时
Promise.myPromiseRace = function(promises){
    return new Promise((resolve,reject) =>{
        promises.forEach(p =>{
            Promise.resolve(p).then(val =>{
                resolve(val)
            },err =>{
                reject(err)
            })
        })
    })
}
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('p1 resolved')
    },3000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('p2 resolved')
    },2000)
})

Promise.myPromiseRace([p1,p2]).then(res =>{
    console.log(res);
})