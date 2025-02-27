/*let requestURL = './prova.json';
let request = new XMLHttpRequest();
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const classe = request.response;
    console.log(classe);
    console.log(classe.insegnanti[1].cognome)
}

function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";myFunction();
}

console.log('ciao')


let nome;
nome="Andrea".toUpperCase();
console.log(nome)
*/

/*let nome= 'mario';
// nome= "mario" 
const persona = {
    
    
    saluta: function(nome) {
        console.log('ciaooo ' + nome)
    }
}

persona.saluta(nome)
*/
/*
for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        console.log ("ciao");
        i++
    }
    else{
        console.log('brumotti')
    }
    console.log(i)
}
*/

/*
for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        console.log ("ciao");
        break //continue invece fa continuare il loop senza riscrivere else ecc
    }
        console.log('brumotti')
    console.log(i)
}
*/

// document.getElementsByTagName('p').style.color = "red";
/*document.querySelector('p').style.color = "green";

let prova = document.getElementsByTagName('li')
let par = document.getElementsByTagName('p')

console.log(prova)
console.log(par)

prova[0].style.color= "red"

let list= document.getElementsByTagName('p');
for (var i = 0; i < list.length; i++) {
    list[i].style.color = "white";
}

console.log(list.length) // (prende tutte le lettere dentro i tag p, ogni tag viene visto come 1 blocco)

*/

/*
let list= document.getElementsByTagName('p');

let listaprova= Array.from(list);
listaprova.forEach(function(item){
    console.log(item)
    item.style.color='green'
})

list.style.color='red'

*/

/*
const item = document.querySelectorAll('li');
item.forEach(function(li) {
    li.textContent="provawww"
})

for (let i = 0; i<item.length; i++) {
    item[i].textContent="provolone";
}
*/

/*
let nuovoLi = document.createElement('li');
console.log(nuovoLi);

nuovoLi.id='primo';
nuovoLi.appendChild(document.createTextNode('ciaone'))


let primoLi = document.getElementById('test');

let body= document.querySelector('body');

body.replaceChild(nuovoLi, primoLi);
*/

/*
let lir= document.querySelectorAll('li');
let p =document.querySelectorAll('p.ki');

let lir2=document.getElementsByTagName('li')
console.log(lir2);
let p2 = document.getElementsByClassName('ki')



console.log(typeof p);
console.log(typeof p2);

p[2].remove()
*/

/*
    let rosso= document.getElementsByClassName('ciao')
    console.log(rosso)
    rosso= Array.from(rosso)
    console.log(rosso)

    document.addEventListener("click", function() {
        rosso.forEach(function(item) {
        item.style.color = "red"    
        });
})
*/

/*
let item = document.getElementsByClassName('alert')
document.addEventListener("click", function() {
for (let i = 0; i<item.length; i++){
    item[i].style.color="green";
}})
*/