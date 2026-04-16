const result = document.getElementById("result");


function getStudentCallback(callback) {

    result.innerHTML = "Loading student...";

    setTimeout(function () {
        const student = {
            name: "Ensar Llukman Shabani",
            age: 14,
            grupi: "JS"
        };

        callback(student);

    }, 5000);

}

function loadCallback() {

    getStudentCallback(function (student) {
    result.innerHTML = "Callback Result:<br>"+
    student.name + " - " +
    student.age + " - " +
    student.grupi + "<br>" 
    });

}
