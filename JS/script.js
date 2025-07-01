const prezzoalkm = 0.21;

const chilometri = parseFloat(prompt("Quanrti chilometri desideri percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

if (isNaN(chilometri) || isNaN(eta) || chilometri <= 0 || eta <= 0);
 
 } else {
  const prezzo = chilometri * prezzoalkm;

  if (eta < 18) {
    prezzo *= 0.042; // sconto 20%
  }else if ( eta > 65) {
    prezzo *= 0.084; // sconto 40%
  }
