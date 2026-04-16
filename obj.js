// const student = { 
//     name: "Ardit", 
//     surname: "Hoxha",
//     age: 20, 
//     country: "Kosovo",
//     city: "Prishtina",
//     address: "Rruga e Dibrës",
//     hobbies: ["Coding", "Traveling", "Cooking"]
// };

// const teacher = { 
//     name: "Limi", 
//     surname: "Hoxha",
//     age: 35, 
//     country: "Kosovo",
//     city: "Prishtina",
//     address: "Rruga B",
//     hobbies: ["Reading", "Teaching", "Walking"]
// };

// const parents = { 
//     name: "Ximi", 
//     surname: "Hoxha",
//     age: 45, 
//     country: "Kosovo",
//     city: "Prishtina",
//     address: "Rruga C",
//     hobbies: ["Gardening", "Cooking", "Traveling"]
// };

// const doctor = { 
//     name: "Drin", 
//     surname: "Berisha",
//     age: 40, 
//     country: "Kosovo",
//     city: "Prizren",
//     address: "Rruga e Spitalit",
//     hobbies: ["Reading", "Running", "Music"]
// };

// const engineer = { 
//     name: "Alban", 
//     surname: "Krasniqi",
//     age: 30, 
//     country: "Kosovo",
//     city: "Peja",
//     address: "Rruga Industriale",
//     hobbies: ["Robotics", "Coding", "Gaming"]
// };

// const designer = { 
//     name: "Era", 
//     surname: "Gashi",
//     age: 27, 
//     country: "Kosovo",
//     city: "Gjakova",
//     address: "Rruga e Qendres",
//     hobbies: ["Drawing", "Photography", "Traveling"]
// };

// console.log("Informatat e Studentit:", student.name, student.surname, student.age, student.country, student.city, student.address, student.hobbies);
// console.log("Informatat e Mësuesit:", teacher.name, teacher.surname, teacher.age, teacher.country, teacher.city, teacher.address, teacher.hobbies);
// console.log("Informatat e Prindërve:", parents.name, parents.surname, parents.age, parents.country, parents.city, parents.address, parents.hobbies);
// console.log("Informatat e Doktorit:", doctor.name, doctor.surname, doctor.age, doctor.country, doctor.city, doctor.address, doctor.hobbies);
// console.log("Informatat e Inxhinierit:", engineer.name, engineer.surname, engineer.age, engineer.country, engineer.city, engineer.address, engineer.hobbies);
// console.log("Informatat e Dizajnerit:", designer.name, designer.surname, designer.age, designer.country, designer.city, designer.address, designer.hobbies);



// const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Kiwi"];

// const drinks = ["Cola", "Fanta", "Sprite", "Juice", "Water", "Ice Tea"];

// const numbers = [5, 10, 15, 20, 25, 30];

// const cities = ["Prishtina", "Prizren", "Peja", "Gjakova", "Mitrovica", "Ferizaj"];

// const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];

// const animals = ["Dog", "Cat", "Lion", "Tiger", "Elephant", "Horse"];

// console.log("Frutat:", fruits[1], fruits[3], fruits[5]);
// console.log("Pijet:", drinks[0], drinks[2], drinks[4]);


// console.log("Numrat:", numbers[0], numbers[2], numbers[4]);
// console.log("Qytetet:", cities[1], cities[3], cities[5]);
// console.log("Ngjyrat:", colors[0], colors[2], colors[4]);
// console.log("Kafshët:", animals[0], animals[1], animals[2], animals[3], animals[3], animals[5]);




// OBJECT
// const student = {
//   name: "Ardit",
//   age: 20,
//   city: "Prishtina"
// };

// console.log("Student Name:", student.name);
// console.log("Student Age:", student.age);


// // ARRAY
// const fruits = ["Apple", "Banana", "Orange"];

// console.log("First Fruit:", fruits[0]);
// console.log("Second Fruit:", fruits[1]);


// // ARRAY OF OBJECTS
// const students = [
//   { name: "Ardit", age: 20 },
//   { name: "Lira", age: 22 },
//   { name: "Dion", age: 19 }
// ];

// console.log("First Student:", students[0].name);
// console.log("Second Student:", students[1].name);


// // JSON
// const studentJSON = JSON.stringify(student);

// console.log("JSON Format:", studentJSON);


// // JSON -> Object
// const backToObject = JSON.parse(studentJSON);

// console.log("Converted Back:", backToObject.name);

   

function showHobbies() {
        const hobbyList = document.getElementById("hobbyList");
        hobbyList.innerHTML = "";
        hobbies.forEach(hobby => {
            const li = document.createElement("li");
            li.textContent = hobby;
            hobbyList.appendChild(li);
        });
    }


    function showPerson(person) {

document.getElementById("info").innerText =
person.name + " " + person.surname + " " + person.age + " Vjet - " + person.city;

document.getElementById("info").innerText =
person.name + " " + person.surname + " " + person.age + " Vjet - " + person.city;

document.getElementById("info").innerText =
person.name + " " + person.surname + " " + person.age + " Vjet - " + person.city;

document.getElementById("info").innerText =
person.name + " " + person.surname + " " + person.age + " Vjet - " + person.city;

}




const student = {
    name: "Ardit",
    age: 20,
    city: "Prishtina"
};


const teacher = {
    name: "Ajra",
    age: 35,
    city: "Prishtine"
};

const doctor = {
    name: "Ensar",
    age: 40,
    city: "Gjakove"
};


const hobbies = ["Reading", "Traveling", "Gaming"];


const programmer = {
    name: "Alban",
    surname: "Krasniqi",
    age: 30,
    city: "Peja",
    hobbies: ["Coding", "Robotics", "Gaming"]
};

const engineer = {
    name: "Erblin",
    surname: "Gashi",
    age: 41,
    city: "Gjakova",
    hobbies: ["Coding", "Robotics", "Gaming"]
};

const manager = {
    name: "Gertina",
    surname: "Kazanova",
    age: 81,
    city: "Prishtina",
    hobbies: ["Coding", "Robotics", "Gaming"]
};

const intern = {
    name: "Arta",
    surname: "Rama",
    age: 38,
    city: "Mitrovica",
    hobbies: ["Coding", "Robotics", "Gaming"]
};

