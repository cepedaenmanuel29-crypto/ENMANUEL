/* =========================
   AUDIO CONTROL
========================= */
function playAudio(){
let audio = document.getElementById("audio");

if(audio.paused){
audio.play();
}else{
audio.pause();
}
}

/* =========================
   SCROLL SUAVE
========================= */
function scrollToSection(){
document.getElementById("mainContent").scrollIntoView({
behavior:"smooth"
});
}

/* =========================
   ANIMACIÓN SCROLL (DOM)
========================= */
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
elements.forEach(el => {
let position = el.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){
el.classList.add("show");
}
});
});

/* =========================
   FACTOS ALEATORIOS (ARRAY + LOOP)
========================= */
function showFact(){
let facts = [
"Mount Everest grows about 4mm every year.",
"Temperatures can drop below -60°C.",
"The Death Zone starts at 8000 meters.",
"Over 300 people have died climbing Everest.",
"Everest was first climbed in 1953."
];

// loop interno (requisito)
for(let i = 0; i < facts.length; i++){
console.log(facts[i]);
}

let random = Math.floor(Math.random() * facts.length);
document.getElementById("fact").innerText = facts[random];
}

/* =========================
   FORM VALIDATION (IF)
========================= */
function validateForm(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name.length < 3){
alert("Name must be at least 3 characters");
return false;
}

if(!email.includes("@")){
alert("Enter a valid email");
return false;
}

alert("Form submitted successfully!");
return true;
}

/* =========================
   BOTÓN VOLVER ARRIBA
========================= */
window.onscroll = function(){
let btn = document.getElementById("topBtn");

if(document.documentElement.scrollTop > 300){
btn.style.display = "block";
}else{
btn.style.display = "none";
}
};

function goTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
