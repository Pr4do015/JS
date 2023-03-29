function enviarNum(){
    
    var operacao = parseInt(document.getElementById("numero").value);

    var total = operacao/2
    

    if (operacao%2 ==0){
        alert( operacao + " É Par");}
    else 
        alert(operacao+" É Impar") }