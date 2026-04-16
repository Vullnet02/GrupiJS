const result = document.getElementById("result");


function getStudentCallback(callback) {

    result.innerHTML = "Loading student...";

    setTimeout(function () {
        const student = {
            name: "Erblin Gashi",
            age: 14,
            pozita: "Me flamurat e Kosovës"
        };

    
        const programer = {
            name: "Ensar Shabani",
            age: 14,
            pozita: "Me flamurat e Kosovës"
        };



        const dizajnere = {
            name: "Nisa Salihu",
            age: 14,
            pozita: "Dizajnere"
        }
        
        const pilot = {
            name: "Dardan Gashi",
            age: 14,
            pozita: "Pilot"
        }

        const doctor = {
            name: "Ajra Nimani",
            age: 14,
            pozita: "Doctore"
        }


        callback(student, programer, dizajnere, pilot, doctor);

    }, 5000);

}

function loadCallback() {

    getStudentCallback(function (student, programer, dizajnere, pilot, doctor) {
    result.innerHTML = "Pershkrimet e personave dhe pozitave   :<br>"+
    student.name + " - " +
    student.age + " - " +
    student.pozita + "<br>" +
    programer.name + " - " +
    programer.age + " - " +
    programer.pozita + "<br>" +
    dizajnere.name + " - " +
    dizajnere.age + " - " +
    dizajnere.pozita + "<br>" +
    pilot.name + " - " +
    pilot.age + " - " +
    pilot.pozita + "<br>" +
    doctor.name + " - " +
    doctor.age + " - " +
    doctor.pozita + "<br>"  ;

    });

}



