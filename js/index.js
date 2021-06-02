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

}
