function playAudio() {
document.getElementById("audio").play();
}

// scroll effect
function scrollToSection() {
document.getElementById("mainContent").scrollIntoView({
behavior: "smooth"
});
}

// page load
document.addEventListener("DOMContentLoaded", function() {
console.log("Website Loaded");
});
