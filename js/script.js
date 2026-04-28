
/* =========================
   AUDIO CONTROL
========================= */
function playAudio() {
let audio = document.getElementById("audio");

if (audio.paused) {
audio.play();
} else {
audio.pause();
}
}

/* =========================
   SMOOTH SCROLL (FIXED)
========================= */
function scrollToSection() {
window.scrollTo({
top: document.getElementById("explore")?.offsetTop || 0,
behavior: "smooth"
});
}

/* =========================
   SCROLL ANIMATION (IMPROVED)
========================= */
const elements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
elements.forEach(el => {
let position = el.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if (position < screenHeight - 100) {
el.classList.add("show");
}
});
}

/* run once on load */
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

/* =========================
   FACTS (ARRAY + RANDOM + LOOP)
========================= */
function showFact() {

let facts = [
"Mount Everest grows about 4mm every year.",
"Temperatures can drop below -60°C.",
"The Death Zone starts at 8000 meters.",
"Over 300 people have died climbing Everest.",
"Everest was first climbed in 1953."
];

// loop requerido (console)
for (let i = 0; i < facts.length; i++) {
console.log(facts[i]);
}

let random = Math.floor(Math.random() * facts.length);
document.getElementById("fact").innerText = facts[random];
}

/* =========================
   FORM VALIDATION
========================= */
function validateForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if (name.length < 3) {
alert("Name must be at least 3 characters");
return false;
}

if (!email.includes("@")) {
alert("Enter a valid email");
return false;
}

alert("Form submitted successfully!");
return true;
}

/* =========================
   BACK TO TOP BUTTON (FIXED)
========================= */
window.addEventListener("scroll", function () {
let btn = document.getElementById("topBtn");

if (!btn) return;

if (document.documentElement.scrollTop > 300) {
btn.style.display = "block";
} else {
btn.style.display = "none";
}
});

function goTop() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}
