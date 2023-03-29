function enviarIdade(){
    
    var valorIdade = parseInt(document.getElementById("idade").value);

    var idadeMenor = 18 - valorIdade

    
    

    if (valorIdade <18){
        alert("Faltam " + idadeMenor + " anos você para tirar habilitação");}
    else 
        alert("Já pode tirar sua habilitação") }