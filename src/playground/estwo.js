//car
//make
//model
//vin
//getDescription
//

class Person {
  name;
  constructor(name = "anonymous name", age = 0) {
    this.name = name;
    this.age = age;
  }

  //the greeting method

  getGreeting() {
    return `hi ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    return "testing";
  }
}

const he = new Student("Lucky", 26, "computerScience");

console.log(he);
const me = new Person("Andrew");
console.log(me.getGreeting());
console.log(he.hasMajor());
console.log(other.hasMajor());

const other = new Person();
console.log(other);

const render = () => {
  const template = (
    <div>
      <p>hello world</p>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
