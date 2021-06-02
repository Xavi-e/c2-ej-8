/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
class Personaje {
  nombre;
  familia;
  edad;
  serie;
  vivo = true;
  constructor(nombre, familia, edad, serie) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.serie = serie;
  }
  comunicar(frase) {
    return `Soy ${this.nombre} y digo: ${frase}.`;
  }
  morir() {
    this.vivo = false;
  }
}

class Rey extends Personaje {
  anyosreinado;
  constructor(nombre, familia, edad, serie, anyosreinado) {
    super(nombre, familia, edad, serie);
    this.anyosreinado = anyosreinado;
  }
  comunicar() {
    return `Soy ${this.nombre} y digo: Vais a morir todos.`;
  }
}

class Asesor extends Personaje {
  personajeAlQueAsesora;
  constructor(nombre, familia, edad, serie, personajeAlQueAsesora) {
    super(nombre, familia, edad, serie);
    this.personajeAlQueAsesora = personajeAlQueAsesora;
  }
  comunicar() {
    return `Soy ${this.nombre} y digo: No sé por qué, pero creo que voy a morir pronto.`;
  }
}

class Escudero extends Personaje {
  personajeAlQueSirve;
  gradoDePelotismo;
  constructor(
    nombre,
    familia,
    edad,
    serie,
    personajeAlQueAsesora,
    gradoDePelotismo
  ) {
    super(nombre, familia, edad, serie);
    this.personajeAlQueAsesora = personajeAlQueAsesora;
    this.gradoDePelotismo = gradoDePelotismo;
  }
  comunicar() {
    return `Soy ${this.nombre} y digo: Soy un loser.`;
  }
}

class Luchador extends Personaje {
  arma;
  destreza;
  constructor(
    nombre,
    familia,
    edad,
    serie,
    arma,
    destreza
  ) {
    super(nombre, familia, edad, serie);
    this.arma = arma;
    this.destreza = destreza;
  }
  comunicar() {
    console.log( `Soy ${this.nombre} y digo: Primero pego y luego pregunto.`);
  }
}

// Funciones
const getMensajesLuchadores = (personajes) =>
  personajes
    .filter((personaje) => personaje.arma !== undefined)
    .map((luchador) => luchador.comunicar());
