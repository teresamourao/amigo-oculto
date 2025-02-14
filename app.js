let lista = [];
sorteioIniciado = false;

// Função para adicionar item à array
function adicionarAmigo(){
    let nome = document.getElementById("amigo").value.trim();
     if (nome !== ""){
    lista.push(nome);
    exibirLista();
    document.getElementById("amigo").value = "";
    } else {
    alert("Por favor, informe um nome");
    }
}

// Função para exibir os nomes na tela
function exibirLista(){
    let textoLista = document.getElementById("listaAmigos");
    textoLista.innerHTML = ""; 
    lista.forEach(function(nome){
        let item = document.createElement("li");
        item.textContent = nome;
        textoLista.appendChild(item);
    });
}

// Função para sortear o amigo
function sortearAmigo(){
    if (lista.length >= 3 || sorteioIniciado) {
        if(!sorteioIniciado) {
            sorteioIniciado = true;
        }

        let result = Math.floor(Math.random() * lista.length);
        let amigoSorteado = lista[result];
        let textoResultado = document.getElementById("resultado");
        textoResultado.innerHTML = `Seu amigo oculto é ${amigoSorteado}`;
        
        evitarDuplicados(amigoSorteado);

        console.log(lista);

        if (lista.length === 0){
            sorteioIniciado = false;
        }

    } else {
        alert("Adicione mais amigos para que o sorteio seja possível");
    }
}

// Função para não sortear o mesmo amigo 2x
function evitarDuplicados (amigoSorteado){
       lista = lista.filter(item => item !== amigoSorteado);
    }

// Função para esconder o amigo sorteado
function limparCampo(){
    let textoResultado = document.getElementById("resultado");
    textoResultado.innerHTML = "";   
}