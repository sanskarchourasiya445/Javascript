// Object literals are used to store keyed collection & complex entities
// properties => (key,value) pair
// objects are collection of properties

let student = {name : "Sanskar",
               age : 20,
               marks : 94,
               city : "Indore"
              };

student.name
//Sanskar
student['marks']
//94
student['city']
//Indore
studant.age
//20
student
//{name:'Sanskar',age:20,marks:94,city:'Indore'}


const user = {
  username: "coder123",
  role: "Developer",
  login: function () {
    return `${this.username} has logged in`;
  }
};

const laptop = {
  brand: "Dell",
  specs: {
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i5"
  }
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}