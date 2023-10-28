var html = '<p>Este es un <script>alert("script malicioso");</script>ejemplo</p>';
var cleanedHTML = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
console.log(cleanedHTML); // Devolvera '<p>este es un ejemplo de ello</p>'
