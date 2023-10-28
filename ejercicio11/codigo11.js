function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
    var mensaje = "Nombre: " + this.nombre + "\n" +
                  "Edad: " + this.edad + "\n" +
                  "Genero: " + this.genero;
    alert(mensaje);
};

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function () {
    var mensaje = "Estudiante registrado en el curso " + this.curso + ", grupo " + this.grupo;
    alert(mensaje);
};

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function () {
    var mensaje = "Profesor asignado para ensenar " + this.asignatura + " en el nivel " + this.nivel;
    alert(mensaje);
};

var estudiante1 = new Estudiante("Juan", 20, "Masculino", "Informatica", "Grupo A");
var profesor1 = new Profesor("Maria", 35, "Femenino", "Matematicas", "Secundaria");

estudiante1.obtDetalles();
estudiante1.registrar();

profesor1.obtDetalles();
profesor1.asignar();





