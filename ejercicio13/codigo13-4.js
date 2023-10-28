var nombreApellido = "John Smith";
var nombreInvertido = nombreApellido.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(nombreInvertido); // Devolverá "Smith, John"
