function Person(fistName, lastName, age, gender) {
  this.fistName = fistName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.communicate = function () {
  console.log("Hello, I am a person");
}

Person.prototype.eat = function () {
  console.log("Yummy Yummy!");
}

Person.prototype.sleep = function () {
  console.log("Zzz...");
}

Person.prototype.fullName = function () {
  console.log(this.fistName + " " + this.lastName);
}



function Doctor(fisrtName, lastName, age, gender, specialization) {
  Person.call(this, fisrtName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log("You have cancer");
}



function Professor(fisrtName, lastName, age, gender) {
  Person.call(this, fisrtName, lastName, age, gender);
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.subject = "Math";
Professor.prototype.teach = function () {
  console.log("2 + 2 = 4");
}

function Student(fisrtName, lastName, age, gender, degree) {
  Person.call(this, fisrtName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log("Study, practice, teach");
}


function GraduateStudent(fisrtName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, fisrtName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function () {
  console.log("Look at these numbers");
}


// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// person.fullName();            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// doctor.fullName();            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
graduateStudent.fullName();   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'


