class Student extends Person {
  constructor(name, age, uni) {
    super(name, age);
    Student.counter++;
    this.id = Student.counter;
    let university = uni;
  }

  static counter = 0;

  static Test = () => {
    console.log("test");
  };
}
  