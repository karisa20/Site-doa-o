let total = 0;

function addToCart(nome, preco) {
    total += preco;
    document.getElementById('total').innerText = total.toFixed(2);
}

function finalizarDoacao() {
    alert('Doação finalizada! Total: R$ ' + total.toFixed(2));
    // Aqui você pode fazer uma requisição AJAX para o backend para registrar a doação, se necessário.
}

//carrosel

var radio =document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true //marca a primeira bolinha quando a primeira imagem aparece

setInterval(() => {
    proximaImagem() 
}, 5000) //intervalo da passagem das imagens

function proximaImagem() { //verificador
    cont++

    if (cont > 3) {
        cont = 1  
   }
    document.getElementById('radio'+cont).checked = true
}