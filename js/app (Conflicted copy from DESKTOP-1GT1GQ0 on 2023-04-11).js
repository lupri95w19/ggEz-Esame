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

let persona= {
    name:"luca",
    eta:22
}

console.log(persona)
*/

/*let valore=5

valore = valore.toString();

console.log(valore)

console.log(typeof valore)
*/

/*const nome= 'marco';
const cognome= 'rossi';
const eta = 21;
const emaschio = true;

if(emaschio==true){
    let maschio='Si';
    console.log('sono '+ nome + ' ' + cognome + 'e ho' + eta + '. Sono maschio? ' + maschio);
} else{
    let maschio='No';
    console.log('sono '+ nome + ' ' + cognome + 'e ho' + eta + '. Sono maschio? ' + maschio);
}

console.log('sono '+ nome + ' ' + cognome + 'e ho' + eta + '. Sono maschio? ' + maschio);
*/

/*
const nome="Aldo";
let risultato;
risultato= nome.length;
risultato= risultato.toString();
risultato= nome[2];
console.log(risultato)
*/

/*
colori = ['rosso', 'blu', 'verde', 'viola'];
colori.push("giallo")

console.log(colori)
*/

/*
const persona = {
    indirizzo: {città: 'Roma', via: "Viale"}
}

console.log(persona.indirizzo.città)
*/

const persone = ['billy'];
persone[0] = 'Billy2';
persone[1]= 'Jake';

delete persone[1]
console.log(persone)


const persona = {
    saluta: function() {
        console.log("ciaooo")
    }
}