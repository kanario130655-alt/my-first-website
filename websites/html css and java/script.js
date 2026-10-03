let count = 0;

function changeMessage() {
    document.getElementById("message").innerHTML =
        "You just used JavaScript! 🚀";
}

function increaseCounter() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decreaseCounter() {
    count--;
    document.getElementById("counter").innerHTML = count;
}

function toggleMode() {
    document.body.classList.toggle("dark");
}