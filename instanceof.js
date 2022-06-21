function myInstanceof(left,right){
    if (typeof right !== 'function' || !right.prototype) throw new TypeError('Right-hand side of 'instanceof' is not an object')
    let proto = Object.getPrototypeOf(left),  // let proto = left.__proto__
    prototype = right.prototype;

    while(true){
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)   //proto = proto.__proto__
    }
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
Person = {
    value:1
}
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(myInstanceof(auto, Car)); // true
  console.log(myInstanceof(auto, Object)); // true

  console.log(auto instanceof Car); // true
  console.log(auto instanceof Object); // true
  
  
