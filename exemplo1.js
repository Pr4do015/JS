function enviarIdade(){
var idade = document.getElementById("idade").value;


if (idade){
    verificaIdade(idade);
} 
}

// if considera verdadeiro != ''/[]/{},0, != null, true 

function verificaIdade(valor){
    if (parseInt(valor) > 18){
        alert("Já pode tirar sua carta seu babaca")
        document.innerHTML = "Já pode tirar sua carta seu babaca"
    } else {
        alert("Não pode tirar sua carta seu babaca")
        document.innerHTML = "Não pode tirar sua carta seu babaca"
    }
}