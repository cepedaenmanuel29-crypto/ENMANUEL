// Play audio
function playAudio() {
document.getElementById("audio").play();
}

// Form validation
document.getElementById("form")?.addEventListener("submit", function(e) {

let name = document.getElementById("name").value;

// if statement
if (name === "") {
alert("Please enter your name");
e.preventDefault();
}

// loop example
let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
console.log(inputs[i].value);
}

});
