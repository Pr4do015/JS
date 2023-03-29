function enviarValor(){
    
    var valorPassagem = parseInt(document.getElementById("passagem").value);

    

    if (valorPassagem <=150){
        alert("Bom preço")
        document.getElementById('resultado').innerText ="Bom preço";}
    else if (valorPassagem >150 && valorPassagem <=200){
        alert("Na média")
        document.getElementById('resultado').innerText ="Média";}
    else 
        alert("Tenta outro APP mano")
        document.getElementById('resultado').innerText ="Tenta outro APP mano";
    }

        
        