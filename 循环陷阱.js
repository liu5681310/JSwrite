const arr=[]
for(var i =0 ;i<5;i++){
    arr.push(function (n){
        console.log(n);
    }.bind(this,i))
}
arr[0]()  //0
arr[1]()  //1
arr[2]()  //2

