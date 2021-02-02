let secret=random(1,10); //alert(secret);
let attempts=3;
document.querySelector (".proveryt").onclick=function () {
let user=document.querySelector ("input").value;
if (secret==user) {
	document.querySelector(".hint").innerHTML=("Вы угадали!")};
if (secret>user) {
	document.querySelector(".hint").innerHTML=("Число больше")};
if (secret<user) {
	document.querySelector(".hint").innerHTML=("Число меньше")};
attempts=attempts-1;
document.querySelector(".attempts").innerHTML=(attempts);
if (attempts==0) {
	document.querySelector("input").disabled=true};
if (attempts==0) {
	document.querySelector(".proveryt").disabled=true};
	document.querySelector("input").value="";
}
document.querySelector (".game").onclick=function () {
	secret=random(1,10);
	attempts=3;
	document.querySelector (".hint").innerHTML=("Я буду подсказывать");
	document.querySelector("input").disabled=false;
	document.querySelector(".attempts").innerHTML=(attempts);
	document.querySelector("input").value="";
	document.querySelector(".proveryt").disabled=false;
	document.querySelector("input").focus();
}
function random(min,max) {
	return(Math.floor(Math.random()*(max-min)+min));
}
