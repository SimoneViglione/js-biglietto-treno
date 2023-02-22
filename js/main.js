const anniPasseggero = prompt('Inserisci la tua età');
console.log(anniPasseggero);

const distanzaViaggio = prompt('Inserisci i km da percorrere');
console.log(distanzaViaggio);

const prezzoBase = 0.21

let prezzoBiglietto = distanzaViaggio * prezzoBase;
console.log(prezzoBiglietto);

if (anniPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 20 / 100;
} else if (anniPasseggero > 65) {
    prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 40 / 100;
}

console.log(prezzoBiglietto.toFixed(2))

document.getElementById('prezzo_biglietto').innerHTML = prezzoBiglietto.toFixed(2);

document.getElementById('anni').innerHTML = anniPasseggero;

document.getElementById('km').innerHTML = distanzaViaggio;