// class Vehicle {
//   constructor(vehicleType) {
//     this.vehicleType = vehicleType;
//   }
// }

// class MotoredVehicle extends Vehicle {
//   constructor(engineSize, vehicleType) {
//     super(vehicleType);
//     this.engineSize = engineSize;
//   }
// }

// class Car extends MotoredVehicle {
//   constructor(
//     model,
//     make,
//     prodYear,
//     engineSize,
//     vehicleType,
//     milage,
//     fuelPerKm,
//     fuelAmount
//   ) {
//     super(engineSize, vehicleType);
//     this.model = model;
//     this.make = make;
//     this.prodYear = prodYear;
//     this.milage = milage;
//     this.fuelPerKm = fuelPerKm;
//     this.fuelAmount = fuelAmount;
//   }

//   go = function (distance) {
//     if (distance * this.fuelPerKm <= this.fuelAmount) {
//         this.milage += distance;
//         this.fuelAmount -= (distance * this.fuelPerKm);
//         console.log(`Car went ${distance} kms. Car's current milage is ${this.milage} kms. ${this.fuelAmount} litres of fuel left.`);
//     }
//     else{
//         console.log("No enough fuel.");
//     }
//   };
// }

// let v1 = new Vehicle("car");
// let v2 = new Vehicle("boat");

// let mv1 = new MotoredVehicle(2, "car");
// let mv2 = new MotoredVehicle(2.5, "plane");

// let c1 = new Car("Mercedes", "S65", 2021, 5.5, "car", 10000, .5, 10);

// c1.go(20);
// c1.go(5);

// console.log(c1);

// console.log(v1);
// console.log(v2);
// console.log(mv1);
// console.log(mv2);

// function CharCount(str) {
//     let obj = {};
//     for (const letter of str) {
//         console.log(obj);
//         if (obj[letter] === undefined) {
//             obj[letter] = 1;
//         } else {
//             obj[letter]++;
//         }
//     }
//     return obj;
// }

// console.log(CharCount("mehemmed"));

// let obj = {
//     k:10
// };

// console.log(obj["k"]);

class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Every(callback) {
    let result = true;

    for (const item of this.elements) {
      if (callback(item) == false) {
        result = false;
        break;
      }
    }

    return result;
  }

  Reduce(callback, total = 0) {
    for (const item of this.elements) {
      total = callback(item, total);
    }
    return total;
  }
}

let myArr = new CustomArray(11.1, 20.6, 15.41, 21.33);

let arr = [11.1, 20.6, 15.41, 21.33];

console.log(myArr.Reduce((item, total) => Math.round(item) + Math.round(total)));

console.log(
  arr.reduce((total, value, index, array) => {
    console.log(Math.round(value));
    return Math.round(value) + Math.round(total);
  },0)
);

// console.log(myArr.Every(elem=>elem>10));
// console.log(myArr.Every(elem=>elem>0));

// let arr = [10,12,31,41,32,51];

// console.log(arr.every(item=>item>9))
