//利用ES6中的Set方法去重
// 方法 1
var arr1 = [1,0,0,2,4,9,8,3,1];

function unique(arr1) {
    return Array.from(new Set(arr1))
}
console.log(unique(arr1));   // [1,0,2,4,9,8,3]


// 方法 2
var arr2 = [1,0,0,2,4,9,8,3,1];
console.log(...new Set(arr2));// [1,0,2,4,9,8,3]



//利用ES6中的Map方法去重
var arr3 = [1, 0, 8, 3, -9, 1, 0, -9, 7]
function unique(arr3) {
 let map = new Map();
 let arr33 = []
     for (let i = 0, len = arr3.length; i < len; i++) {
         if (map.has(arr3[i])) {      
             map.set(arr3[i], true);
         }
         else {
             map.set(arr3[i], false);
             arr33.push(arr3[i]);
         }
     }
     return arr33;
 }
console.log(unique(arr3)); // 1, 0, 8, 3, -9, 7



//利用数组的filter方法去重
var arr4 = [1,2,8,9,5,8,4,0,4];

function unique( arr4 ){
     // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
     return arr4.filter(function(item,index){
         return arr4.indexOf(item,0) === index;
     });
 }
 console.log(unique(arr4));    //  1, 2, 8, 9, 5, 4, 0




 //利用hasOwnProperty
 var arr5 = [1,0,0,2,4,4,8,3,1];
 function unique(arr5) {
    let obj = {};
    return arr5.filter(function(item, index, arr5){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
console.log(unique(arr5));   // [1,0,2,4,8,3]




//利用数组的indexOf方法去重
var arr6 =[1,-5,-4,0,-4,7,7,3];
function unique(arr6){
   var arr66 = [];       // 新建一个数组来存放arr中的值
   for(var i=0,len=arr6.length;i<len;i++){
       if(arr66.indexOf(arr6[i]) === -1){
           arr66.push(arr6[i]);
       }
   }
   return arr66;
}
console.log(unique(arr6));    // 1, -5, -4, 0, 7, 3




//利用数组的sort方法去重
var arr7 =  [5,7,1,8,1,8,3,4,9,7];
function unique( arr7 ){
    arr7 = arr7.sort();
    console.log(arr7);

    var arr77 = [arr7[0]];
    for(var i=1,len=arr7.length;i<len;i++){
        if(arr7[i] !== arr7[i-1]){
            arr77.push(arr7[i]);
        }
    }
    return arr77;
}
console.log(unique(arr7));   //  1, 1, 3, 4, 5, 7, 7, 8, 8, 9




//利用数组的includes去重
var arr8 = [1,0,0,2,4,4,8,3,1];
function unique( arr8 ){
    var arr88 = [];
    for(var i=0,len=arr8.length;i<len;i++){
        if( !arr88.includes( arr8[i] ) ){      // 检索arr1中是否含有arr中的值
            arr88.push(arr8[i]);
        }
    }
    return arr88;
  }
  console.log(unique(arr8));   // [1,0,2,4,8,3]



  //利用双重for循环,再利用数组的splice去重
var arr9 = [1, 5, 6, 0, 7, 3, 0, 5, 9,5,5];
function unique(arr9) {
    for (var i = 0, len = arr9.length; i < len; i++) {
        for (var j = i + 1, len = arr9.length; j < len; j++) {
            if (arr9[i] === arr9[j]) {
                arr9.splice(j, 1);
                j--;        // 每删除一个数j的值就减1
                len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
                // console.log(j,len)
            }
        }
    }
    return arr9;
}
console.log(unique(arr9));       //  1, 5, 6, 0, 7, 3, 9


  