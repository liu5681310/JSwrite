function myShallowCopy(object){
    if(!object || typeof object !== "object") return;
    let newObject = Array.isArray(object) ?[]:{};
    for (let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = object[key];
        }
    }
    return newObject
}

let obj1 = {a:1,b:{c:1}}
let obj2 = {a:1}
obj2.myShallowcopy(obj1)
console.log(obj1);
console.log(obj2);

