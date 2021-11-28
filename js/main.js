// let str = "Bəşir,Mamed,  Isabala,Yusif, Rasim";
// let str2 = "Mamed";

// console.log(str.substr(1,3));
// console.log(str.replace("a","ma"));
// console.log(str.toLocaleUpperCase("tr-TR"));

// let str3 = str.concat(", ", str2);

// console.log(str3);

// console.log(str.charAt(1));
// console.log(str[1]);

// str[1] = "a";
// console.log(str);

// console.log(str.charAt(10));
// console.log(str[10]);

// let names = str.split(",");

// names.forEach( (item,index) => {
//     names[index]=item.trim();
// });

// console.log(names);

// for (const ch of str) {
//     console.log(ch);
// }

// console.log(`str2 - ${str2}`);

// let stu = {
//   id: 1,
//   name: "Mamed",
//   age: 19,
//   "work place": "Code Academy",
//   Info: function () {
//     return `${this.id} - ${this.name} - ${this.age}`;
//   },
// };
// let stu1 = {
//   id: 2,
//   name: "isa",
//   age: 12,
//   "work place": "Code Academy",
//   Info: function () {
//     return `${this.id} - ${this.name} - ${this.age}`;
//   },
// };

// let p411 = {
//   name: "p411",
//   maxCount: 5,
//   students: [],
//   addStudent: function (student) {
//     if (this.students.length == this.maxCount) {
//       console.log("Max student count reached.");
//       return;
//     }

//     for (const s of this.students) {
//       if (s.id == student.id) {
//         console.log("Student already in group.");
//         return;
//       }
//     }

//     if (this.students.find((s) => s.id == student.id) != undefined) {
//       console.log("Student already in group.");
//       return;
//     }

//     this.students.push(student);
//   },
// };

// p411.addStudent(stu);
// p411.addStudent(stu);
// p411.addStudent(stu1);
// p411.addStudent(stu1);

// let arr = [1,2,3,4,5];

// let res = arr.find(num=>{
//     console.log(num);
//     return num > 2;
// })

// console.log(res);


// console.log(Student.counter);

// let st1 = new Student("Mamed", 12, "BSU");
// let st2 = new Student("Isa", 21, "Ada");
// let st3 = new Student("Mahir", 31, "Unec");

// console.log(Student.counter);

// console.log(st1);
// console.log(st2);
// console.log(st3);

// Student.Test();

// let g1 = new Group("p411",15);

// g1.addStudent(st1);
// g1.addStudent(st2);

// let g2 = new Group("p412",11);
// g2.addStudent(st3);


// let w1 = new Worker("Elnur", 28, "FHN");

// console.log(w1);

// function Human(name,surname) {
//     this.name = name;
//     this.surname = surname;
// }

// let p1 = new Human("Elgun","Babayev");

// console.log(p1.name);
