console.log("Portfolio Loaded Successfully");

// ========================
// DOM Selection
// ========================

const darkBtn=document.getElementById("darkBtn");
const aboutText=document.getElementById("aboutText");
const changeText=document.getElementById("changeText");

const form=document.getElementById("contactForm");
const error=document.getElementById("error");

const gallery=document.getElementById("gallery");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

// ========================
// Dark Mode
// ========================

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark-mode")
);

}

darkBtn.addEventListener("click",toggleDarkMode);

// Load saved preference

if(localStorage.getItem("darkMode")=="true"){

document.body.classList.add("dark-mode");

}

// ========================
// Change About Text
// ========================

changeText.addEventListener("click",function(){

aboutText.innerHTML=
"I enjoy Java, Python, Web Development and AI.";

});

// ========================
// Image Gallery
// ========================

const images=[

"images/project1.png",
"images/project2.png",
"images/project3.png"

];

let index=0;

function showImage(){

gallery.src=images[index];

}

next.addEventListener("click",function(){

index++;

if(index>=images.length){

index=0;

}

showImage();

});

prev.addEventListener("click",function(){

index--;

if(index<0){

index=images.length-1;

}

showImage();

});

// ========================
// Hover Effect
// ========================

gallery.addEventListener("mouseover",function(){

gallery.style.transform="scale(1.05)";

});

gallery.addEventListener("mouseout",function(){

gallery.style.transform="scale(1)";

});

// ========================
// Show Error
// ========================

function showError(message){

error.className="fail";

error.innerHTML=message;

}

// ========================
// Show Success
// ========================

function showSuccess(message){

error.className="success";

error.innerHTML=message;

}

// ========================
// Form Validation
// ========================

form.addEventListener("submit",validateForm);

function validateForm(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name==""){

showError("Enter your name");

return;

}

if(!email.includes("@")){

showError("Enter valid email");

return;

}

if(message.length<10){

showError("Message should contain at least 10 characters");

return;

}

showSuccess("Message Sent Successfully");

form.reset();

}

// ========================
// Real-Time Validation
// ========================

document.getElementById("email").addEventListener("keyup",function(){

if(this.value.includes("@")){

this.style.border="2px solid green";

}else{

this.style.border="2px solid red";

}

});