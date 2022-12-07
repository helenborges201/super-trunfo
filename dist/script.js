var carta1 = {
  nome: "Sailor Moom",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/sailormoon_uyes.jpg",
  atributos: {
    ataque: 4,
    defesa: 4,
    magia: 10
  }
};

var carta2 = {
  nome: "Sailor Marte",
  imagem:
    "https://i.pinimg.com/564x/a2/e1/5a/a2e15a8261e7c3250e32b63671e46935.jpg",
  atributos: {
    ataque: 9,
    defesa: 4,
    magia: 8
  }
};

var carta3 = {
  nome: "Sailor Mercurio",
  imagem:
    "https://pbs.twimg.com/media/EdlEYmcXgAUzN2Q.png",
  atributos: {
    ataque: 7,
    defesa: 10,
    magia: 4
  }
};

var carta4 = {
  nome: "Sailor Jupiter",
  imagem:
    "https://44.media.tumblr.com/7381f1f59a168694f87f0c7b8b9aed58/tumblr_oo63nxBKxh1uqmh0po1_540.gif",
  atributos: {
    ataque: 10,
    defesa: 7,
    magia: 3
  }
};

var carta5 = {
  nome: "Sailor Vênus ",
  imagem:
    "https://img.quizur.com/f/img5ef66febc38eb6.42141638.jpg?lastEdited=1593208814",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 8
  }
};

var carta6 = {
  nome: "Sailor Urano",
  imagem:
    "https://images.mod-fashions.com/img/lists/7/sailor-moon-10-questions-about-sailor-uranus-answered.jpg",
  atributos: {
    ataque: 10,
    defesa: 6,
    magia: 3
  }
};
var carta7 = {
  nome: "Sailor Netuno",
  imagem:
    "https://images.mod-fashions.com/img/lists/7/sailor-moon-10-questions-about-sailor-uranus-answered.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 7
  }
};
var carta8 = {
  nome: "Sailor Plutão",
  imagem:
    "https://i.pinimg.com/736x/0c/8c/22/0c8c22d6895b7a880e4319125b7ac48b.jpg",
  atributos: {
    ataque: 8,
    defesa: 10,
    magia: 6
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
// 0          1           2
var baralhoJogador = cartas;
var baralhoMaquina = cartas;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 8);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    baralhoMaquina.shift(cartaMaquina.atributos[atributoSelecionado]);
    baralhoMaquina.splice;
    console.log(baralhoMaquina);
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

 function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}