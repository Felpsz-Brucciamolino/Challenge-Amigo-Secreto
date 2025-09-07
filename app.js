// Comecei com essa função que mostra o amigo sorteado.
function Mostrar_Amigo_Secreto() {
    document.getElementsByClassName("resultado")[0].innerHTML = "Seu amigo secreto é: Fulano";
}


// função que sorteia o amigo secreto
function sorteador_amigo(nome) {
    const amigos = ["Fulano", "Ciclano", "Beltrano", "Maria", "João"];
    const amigo_secreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementsByClassName("resultado")[0].innerHTML = "Seu amigo secreto é: " + amigo_secreto;
}


// função para funcionar o botão
function sortear() {
    const nome = document.getElementsByClassName("nome")[0].value;
    sorteador_amigo(nome);
}
