/*Diseñar, a una pagina web que este vacia inicialmente,posteriormente, unicamente con JS, añade una tabla del contenido que prefieras
con un minimo de dos columnas.Al final de la tabla crear un boton como hicimos en la activad de alumno aleatorio para que cada vez que pulsemos
se añada una fila a dicha tabla con datos aleatorios previamente declarados
la tabla sera una tabla con nombres y edades. los nombres seran en un array y la edad un numero aleatorio de 0-100 */

let body = document.getElementsByTagName("body")[0];
let tableHeader= document.createElement("table");
let tableBodyHeader= document.createElement("tbody");
let namesHeader=document.createElement("td");
let rowHeader=document.createElement("tr");
let agesHeader=document.createElement("td");
let nameTextHeader=document.createTextNode("names");
let ageTextHeader=document.createTextNode("ages");

let names=document.createElement("td");
let row=document.createElement("tr");
let ages=document.createElement("td");
let nameText=document.createTextNode("");
let ageText=document.createTextNode("");
let list =["Fer", "Alejandro", "Patri","Sergio","Alexis"];
let button = document.createElement("button");


agesHeader.appendChild(ageTextHeader);
namesHeader.appendChild(nameTextHeader);
rowHeader.appendChild(nameTextHeader);
rowHeader.appendChild(agesHeader);

tableBodyHeader.appendChild(rowHeader);
tableHeader.appendChild(tableBodyHeader);
body.appendChild(tableHeader);


button.innerText="Pulsar";
body.appendChild(button);

button.addEventListener("click",insertDatas);








function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function insertDatas(){
   let table=tableHeader.insertRow(1);
   let names=table.insertCell(0);
   let ages=table.insertCell(1);
    ages.appendChild(ageText);
    ages.innerText=getRandomInt(100);
    names.appendChild(nameText);
    names.innerText=list[getRandomInt(list.length)]
 


}

