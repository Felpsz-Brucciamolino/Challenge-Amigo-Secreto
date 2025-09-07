// Criando as variáveis básicas do meu programa
let lista_nomes = [];



// Comecei por aqui, fazendo com que ao escrever um nome (válido) e clicar no botão "adicionar"
// O nome escrito pelo usuário seja adicionado na lista "lista_nomes"
function adicionar_amigo() {
    if(document.querySelector("#amigo").value == "" || document.querySelector("#amigo").value == null || 
document.querySelector("#amigo").value == undefined){
        alert("Nome inválido, digite um nome válido ^^")
    } else{
        if (lista_nomes.includes(document.querySelector("#amigo").value)) {
            alert("Esse nome já está na lista \ntente variar ^^")
        } else {
            let nome = document.querySelector("#amigo").value;
            lista_nomes.push(nome);
            console.log(lista_nomes);
            mostrar_lista_nomes();
            document.querySelector("#amigo").value = "";
        }
    }
}



// Função para sortear UM amigo entre TODOS o nomes que o usuário colocou
function sortear_amigo() {
    let nome_sorteado = parseInt(Math.random() * lista_nomes.length)
    nome_sorteado = document.querySelector("#result-list");
}



function mostrar_lista_nomes() {
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = ""; // depois de me humilhar para pedir ajuda à IA, descobri que precisava disso para não duplicar os nomes
    lista_nomes.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

