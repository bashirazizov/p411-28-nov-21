class Group {
  constructor(name, maxCount) {
    this.name = name;
    this.maxCount = maxCount;
  }

  students = [];

  addStudent = function (student) {
    if (this.students.length == this.maxCount) {
      console.log("Max student count reached.");
      return;
    }

    if (this.students.find((s) => s.id == student.id) != undefined) {
      console.log("Student already in group.");
      return;
    }

    this.students.push(student);
  };
}
