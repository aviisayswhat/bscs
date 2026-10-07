console.log(document)
let status = document.getElementById("status");
let form = document.getElementById("form");
let img =  document.getElementById("myImg");
let inp = document.getElementById("nickname");

form.addEventListener("mouseenter", function(){status.innerHTML = "you join the form.";});
form.addEventListener("mouseleave", function(){status.innerHTML = "you left the form.";});

img.addEventListener("mouseover", function(){img.width = 200;});
img.addEventListener("mouseout", function(){img.width = 120;});

document.getElementById("btn1").addEventListener("click", function(){status.innerHTML = "Hi " + inp.value + ", " + "Welcome to Javascript!";});
document.getElementById("btn2").addEventListener("dblclick", function(){status.innerHTML = "Double click!";});

btn3.addEventListener("mousedown", function(){status.innerHTML = "waiting for interaction...";});
btn3.addEventListener("mouseup", function(){status.innerHTML = "you join the form.";});

nickname.addEventListener("mouseenter", function () {nickname.style.backgroundColor = "#ccc"})
nickname.addEventListener("mouseleave", function () {nickname.style.backgroundColor = "white"})


