/*console.log("Hello, World!");

/*document.body.innerHTML ="<h1>hello world</h1>" /*permet d'écrire dans le body directement */

/*var greetingsDiv = document.querySelector('#greetings');

document.querySelector("#greetings").innerHTML = "<h1>Hello world</h1>";

var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];
students.forEach(function(student) {
	console.log(student)
})

var studentsList = document.querySelector('#studentsList');

students.forEach(function(students){
document.querySelector("#studentsList").innerHTML += "<li>"+ students +"</li>";
})*/



/*function loadStyle(event) {
    event.target.className = "dynamicStyle";
  }
  
  document.querySelector("main").addEventListener("click", loadStyle);*/

var btnSolver = document.querySelector("#btn-solver");
var inputInput1 = document.querySelector("#input1");
var inputInput2 = document.querySelector("#input2");
var inputResultat = document.querySelector("#resultat");

btnSolver.addEventListener("click", solve);

function solve(event){
    inputResultat.value = parseInt(inputInput1.value) + parseInt(inputInput2.value);
}