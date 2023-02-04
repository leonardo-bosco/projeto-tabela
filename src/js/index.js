//
// colocando todos os times em variaveis
//
var fluxo = {
    nome: "Fluxo",
    time: "https://seeklogo.com/images/F/fluxo-ff-logo-A5BF9A8EBA-seeklogo.com.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var furia = {
    nome: "FURIA",
    time:
      "https://pbs.twimg.com/profile_images/1597295560008110081/GEXdpGQq_400x400.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var intz = {
    nome: "INTZ",
    time:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/Logo_INTZ.png/175px-Logo_INTZ.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var kabum = {
    nome: "KaBuM",
    time:
      "https://esports.kabum.com.br/wp-content/uploads/2019/05/logo-e-sports-169x168.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var liberty = {
    nome: "Liberty",
    time:
      "https://images.squarespace-cdn.com/content/v1/61afb10ae1f7cf52bfb3dd13/1a627bac-be78-47d3-917f-72b4d880beba/%23557q1m_presskit_logo_cyan_transparent_RGB.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var los = {
    nome: "Los Grandes",
    time:
      "https://www.ffesportsbr.com.br/wp-content/uploads/2022/07/Los-Grandes-lbff8.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var loud = {
    nome: "LOUD",
    time: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var pain = {
    nome: "paiN Gaming",
    time:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/PaiN_Gaming_logo.svg",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var red = {
    nome: "RED Canids Kalunga",
    time: "https://upload.wikimedia.org/wikipedia/pt/d/df/RED_Canids_Kalunga.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var vivo = {
    nome: "Vivo Keyd Stars",
    time: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/23/Vivo_Keyd.png/140px-Vivo_Keyd.png",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  //
  // juntando todos em uma lista
  //
  var listaTimes = [
    fluxo,
    furia,
    intz,
    kabum,
    liberty,
    los,
    loud,
    pain,
    red,
    vivo  
  ];
  
  var elementoTabela = document.getElementById("tabelaTimes");
  
  exibirNaTela();
  //
  // funcao exibir na tela
  //
  function exibirNaTela() {
    var resultado = "";
    for (var i = 0; i < listaTimes.length; i++) {
      resultado += `
        <tr>
          <td>${listaTimes[i].nome}</td>
          <td><img src="${listaTimes[i].time}" class="time"></td>
          <td>${listaTimes[i].pontos}</td>
          <td>${listaTimes[i].vitoria}</td>
          <td>${listaTimes[i].empate}</td>
          <td>${listaTimes[i].derrota}</td>
          <td><button onClick="botaoVitoria(${i})">Vitória</button></td>
          <td><button onClick="botaoEmpate(${i})">Empate</button></td>
          <td><button onClick="botaoDerrota(${i})">Derrota</button></td>
        </tr>
        `;
    }
    elementoTabela.innerHTML = resultado;
  }
  //
  // vitoria
  //
  function adicionarVitoria(time) {
    listaTimes[time].vitoria++;
    listaTimes[time].pontos = listaTimes[time].pontos + 3;
    exibirNaTela();
  }
  
  function botaoVitoria(time) {
    adicionarVitoria(time);
    var perdedor = prompt("Quem perdeu contra esse time?");
    var posicao = -1;
  
    for (var i in listaTimes) {
      if (perdedor == listaTimes[i].nome) {
        posicao = i;
      }
    }
  
    if (posicao != -1) {
      adicionarDerrota(posicao);
    } else {
      alert("Esse time não está na lista!");
    }
  }
  //
  // derrota
  //
  function adicionarDerrota(time) {
    listaTimes[time].derrota++;
    exibirNaTela();
  }
  
  function botaoDerrota(time) {
    adicionarDerrota(time);
    var vencedor = prompt("Quem venceu no jogo contra esse time?");
    var posicao = -1;
    for (var i in listaTimes) {
      if (vencedor == listaTimes[i].nome) {
        posicao = i;
      }
    }
  
    if (posicao != -1) {
      adicionarVitoria(posicao);
    } else {
      alert("Esse time não está na lista!");
    }
  }
  //
  //empate
  //
  function adicionarEmpate(time) {
    listaTimes[time].empate++;
    listaTimes[time].pontos++;
    exibirNaTela();
  }
  
  function botaoEmpate(time) {
    adicionarEmpate(time);
    var empate = prompt("Quem empatou com este time?");
    var posicao = -1;
    for (var i in listaTimes) {
      if (empate == listaTimes[i].nome) {
        posicao = i;
      }
    }
  
    if (posicao != -1) {
      adicionarEmpate(posicao);
    } else {
      alert("Esse time não está na lista!");
    }
  }
  
  
  function zerarPontos() {
    for (var i in listaTimes) {
      listaTimes[i].pontos = 0;
      listaTimes[i].vitoria = 0;
      listaTimes[i].empate = 0;
      listaTimes[i].derrota = 0;
    }
    exibirNaTela();
  }
  
  function adicionarTime() {
    var nomeJogador = prompt(
      "Insira o nome do time que irá participar do CBLOL"
    );
    var avatarJogador = prompt(
      "Insira um endereço de imagem para ser a foto do Time"
    );
  
    var novoTime = {
      nome: nomeJogador,
      avatar: avatarJogador,
      pontos: 0,
      vitoria: 0,
      empate: 0,
      derrota: 0
    };
  
    // Adiciona o novo jogador a lista de jogadores
    listaTimes.push(novoTime);
  
    // Zera a tabela pois entrou um novo jogador
    zerarPontos();
  
    // Atualiza a tela com o novo jogador
    exibirNaTela();
  }
  
  function removerTime() {
    // Pergunta o nome do vencedor
    var nome = prompt("Qual o nome do time que deseja remover?");
    var posicao = -1;
  
    for (var i in listaTimes) {
      if (nome == listaTimes[i].nome) {
        posicao = i;
      }
    }
  
    if (posicao != -1) {
      listaTimes.splice(posicao, 1); // Exclui o jogador da lista
  
      zerarPontos();
  
      exibirNaTela();
    } else {
      alert("O time informado não foi encontrado na lista de times!");
    }
  }
  
  function trocarAvatar() {
    var nome = prompt("Qual o nome do Time que deseja trocar de avatar?");
    var posicao = -1;
  
    for (var i in listaTimes) {
      if (nome == listaTimes[i].nome) {
        posicao = i;
      }
    }
  
    if (posicao != -1) {
      var avatar = prompt(
        "Insira um endereço de imagem para ser o novo avatar do Time"
      );
  
      listaTimes[posicao].avatar = avatar;
  
      exibirNaTela();
    } else {
      alert("O Time informado não foi encontrado na lista de times!");
    }
  }
  
  function finalizarCBLOL() {
    var contador = 0;
    var maior = 0;
  
    var campoResultado = document.getElementById("resultado");
  
    for (var i in listaTimes) {
      if (listaTimes[i].pontos > maior) {
        maior = listaTimes[i].pontos;
        var posicao = i;
      }
    }
  
    for (var i in listaTimes) {
      if (listaTimes[i].pontos == maior) {
        contador++;
      }
    }
  
    if (contador > 1) {
      campoResultado.innerHTML = `
      <h2>Resultado</h2> 
      <p>Houve empate entre ${contador} Times com ${maior} pontos.
      `;
    } else {
      campoResultado.innerHTML = `
      <h2>Resultado</h2>
      <h3>Vencedor: ${listaTimes[posicao].nome}</h3>
      <img src=${listaTimes[posicao].avatar}>
      <p>${listaTimes[posicao].pontos} pontos, com ${listaTimes[posicao].vitoria} vitórias, ${listaTimes[posicao].empate} empates e ${listaTimes[posicao].derrota} derrotas</p>
      `;
    }
  }
  