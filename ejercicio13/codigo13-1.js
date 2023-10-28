var fechaRegex = /\b\d{2}\/\d{2}\/\d{4}\b/;
var texto = "Nací el 05/04/1982 en Donostia.";
console.log(fechaRegex.test(texto)); // Devolverá true si la fecha está en el texto

