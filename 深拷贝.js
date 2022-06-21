function myDeepCopy(object){
    if(!object ||typeof object !=='object') return;
    let newObject = Array.isArray(object) ? [] : {};//if(object instanceof Array){result = [];}  else{result = {};} 
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = 
            typeof object[key] === "object" ? myDeepCopy(object[key]) : object[key]
        }
    }
    return newObject
}

const oldObj = {
    name:'小刘',
    age:26,
    colors:['green','yellow'],
    friend:{
        name:'小张'
    }
}
const newObj = myDeepCopy(oldObj);
newObj.friend.name = '小冯';
console.log('oldObj',oldObj);
console.log('newObj',newObj);