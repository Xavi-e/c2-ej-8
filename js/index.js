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
    return frase;
  }
  morir() {
    this.vivo = false;
  }
}


class Rey extends Personaje{
    anyosreinado;

    constructor(nombre, familia, edad, serie, anyosreinado) {
      super(nombre, familia, serie);
      this.anyosreinado = anyosreinado;
    }

    comunicar(){
      return "Vais a morir todos"
    };


class Asesor extends Personaje {
  personajeAlQueAsesora;
  constructor(nombre, familia, edad, serie, personajeAlQueAsesora) {
    super(nombre, familia, edad, serie);
    this.personajeAlQueAsesora = personajeAlQueAsesora;
  }
  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
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
    return "Soy un loser";
  }

}
