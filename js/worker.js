class Worker extends Person {
  constructor(name, age, workplace) {
    super(name, age);

    Worker.counter++;
    this.id = Worker.counter;

    this.workplace = workplace;
  }

  static counter = 0;
}