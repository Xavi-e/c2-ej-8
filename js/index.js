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
    .filter((personaje) => personaje.constructor.name === "Luchador")
    .map((luchador) => luchador.comunicar());

const personajesPorEdad = (personajes) =>
  personajes.sort(({ edad: edad1 }, { edad: edad2 }) => edad1 - edad2);

const personajesPorTipo = (personajes) =>
  personajes.reduce((acumulador, personaje) => {
    const tipo = typeof personaje.constructor.name;
    const personajesDelTipo = acumulador.find(
      (personaje) => personaje.constructor.name === tipo
    );
    if (personajesDelTipo) {
      personajesDelTipo.personajes.push(personaje);
      personajesDelTipo.personajes = personajesPorEdad(
        personajesDelTipo.personajes
      );
      return acumulador;
    } else {
      return [...acumulador, { tipo, personajes: [personaje] }];
    }
  }, []);
