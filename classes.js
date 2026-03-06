// class = blueprint for creating objects

class Person {
  constructor(name, age) {  // runs when you do 'new Person()'
    this.name = name;       // 'this' = the object being created
    this.age = age;
  }

  greet() {
    return `Hi I'm ${this.name}, age ${this.age}`;
  }
}

const p1 = new Person("Arjun", 22);
const p2 = new Person("Priya", 25);
console.log(p1.greet()); // "Hi I'm Arjun, age 22"
console.log(p2.greet()); // "Hi I'm Priya, age 25"


// --- Inheritance (extends) ---
// child class gets everything from parent + can add its own stuff

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return `${this.name} says ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof"); // super() calls the parent constructor
  }
  fetch() {
    return `${this.name} fetched the ball!`;
  }
}

const dog = new Dog("Bruno");
console.log(dog.speak());  // "Bruno says Woof"   (inherited from Animal)
console.log(dog.fetch());  // "Bruno fetched the ball!" (Dog's own method)


// --- Static Method ---
// belongs to the class itself, not to any object

class MathHelper {
  static add(a, b) { return a + b; }
}

console.log(MathHelper.add(3, 5)); // 8
