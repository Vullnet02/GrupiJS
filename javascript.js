let total = 0;

const totalText = document.getElementById("total");
const add5 = document.getElementById("add5");
const add10 = document.getElementById("add10");
const reset = document.getElementById("reset");

add5.addEventListener("click", function() {
    total += 5;
    updateUI();
});

add10.addEventListener("click", function() {
    total += 10;
    updateUI();
});

reset.addEventListener("click", function() {
    total = 0;
    updateUI();
});

function updateUI() {
    totalText.innerText = "Totali: " + total + "€";

    if (total > 50) {
        document.body.style.backgroundColor = "lightgreen";
    } else {
        document.body.style.backgroundColor = "white";
    }
}
