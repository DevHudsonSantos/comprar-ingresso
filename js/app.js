function comprar(){

    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdCompra = parseInt(document.getElementById('qtd').value);

   if (tipoIngresso.value == 'pista'){
        pista(qtdCompra);
   } else if(tipoIngresso.value = 'inferior'){
        inferior(qtdCompra);
   } else if (tipoIngresso.value = 'superior'){
        superior(qtdCompra);
   }
}

function pista (qtdCompra){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); // parseInt é para transformar em número o .textContent

    if (qtdCompra > qtdPista){
        alert('Quantidade de ingresso ingresso indisponível');
    } else{
        qtdPista = qtdPista - qtdCompra;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
}
}
function inferior (qtdCompra){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtdCompra > qtdInferior){
        alert('Quantidade de ingresso ingresso indisponível');
    } else{
        qtdInferior = qtdInferior - qtdCompra;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}

function superior (qtdCompra){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (qtdCompra > qtdSuperior){
        alert('Quantidade de ingresso ingresso indisponível');
    } else{
        qtdSuperior = qtdSuperior - qtdCompra;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
}
}

