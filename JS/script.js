const prezzoalkm = 0.21;

const chilometri = parseFloat(prompt("Quanrti chilometri desideri percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
let prezzo = chilometri * prezzoalkm;

 if (isNaN(chilometri) || isNaN(eta) || chilometri <= 0 || eta <= 0)
 console.log("Dati non validi.");
 
if (eta < 18) {
  prezzo *= 0.8; // sconto 20%
}else if ( eta > 65) {
  prezzo *= 0.6; // sconto 40%
}

 console.log(`Il prezzo totale del tuo viaggio è di €${prezzo.toFixed(2)}`); // massimo due decimali