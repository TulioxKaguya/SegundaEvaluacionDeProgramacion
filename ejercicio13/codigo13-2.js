var emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,3}$/;
var correo = "mi.email@ejemplo.com";
console.log(emailRegex.test(correo)); // Devolverá true si el correo es válido

