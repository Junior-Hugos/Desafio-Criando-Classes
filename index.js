class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque(ataque) {
    const tiposDeHerois = ["Mago", "Guerreiro", "Monge", "Ninja"];

    const encontarHeroi = tiposDeHerois.find((tipo) => tipo === this.tipo);

    if (encontarHeroi) {
      console.log(
        `O ${this.tipo} por nome ${this.nome} atacou usando ${ataque}`
      );
    } else {
      console.log("Herói não cadastrado!");
    }
  }
}

let heroi = new Heroi("Artur", 40, "Guerreiro");

heroi.ataque("Espada");
