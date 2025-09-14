// Criando as variáveis básicas do meu programa
let lista_nomes = [];



// Comecei por aqui, fazendo com que ao escrever um nome (válido) e clicar no botão "adicionar"
// O nome escrito pelo usuário seja adicionado na lista "lista_nomes"
function adicionar_amigo() {
    if(document.querySelector("#amigo").value == "" || document.querySelector("#amigo").value == null || 
    document.querySelector("#amigo").value == undefined){
        alert("Nome inválido, digite um nome válido ^^")
    }   else{
        if (lista_nomes.includes(document.querySelector("#amigo").value)) {
        alert("Esse nome já está na lista \ntente variar ^^");
        } else{
            pedro_pedro_pedro();
            let nome = document.querySelector("#amigo").value;
            lista_nomes.push(nome);
            console.log(lista_nomes);
            mostrar_lista_nomes();
            document.querySelector("#amigo").value = "";
        }
    }
}

// Função para sortear UM amigo entre TODOS o nomes que o usuário colocou 
// E mostrar o nome sorteado da lista "lista_nomes"
function sortear_amigo() {
    if (lista_nomes.length === 0) {
        alert("Por favor, insira um nome.");
        return;
      }

    let escolhido = Math.floor(Math.random() * lista_nomes.length);
    document.querySelector("#listaAmigos").innerHTML = ""
    resultado.textContent = `🎉 Seu amigo sorteado é: ${lista_nomes[escolhido]}!`;
}



function mostrar_lista_nomes() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    lista_nomes.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}



function pedro_pedro_pedro() {
    let nome = document.querySelector("#amigo").value;
        if (nome.toLowerCase() === "pedro") {
        let musica = document.querySelector("#musica")
        musica.play();
        setTimeout(() => {
            musica.pause();
            musica.currentTime = 0;
        },9000);
    }
}