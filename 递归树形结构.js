
let obj = {
    name:'xx',
    children:[
        {
            name:'ff',
            age:'11',
            children:[{
                name:'sss',
                age:2222,
                children:[{
                    name:{ss:11},
                    age:77
                }]
            }]
        },
    ]
}


let getName = (obj)=>{
    let isArr = Array.isArray(obj);
    let result = [];
    if(isArr){
        obj.forEach(item => {
            result.push(...getName(item));
        });
    }else{
        result.push(obj.name)
        if(obj.children){
            result.push(...getName(obj.children));
        }
    }
    return result;
}
console.log(getName(obj))
