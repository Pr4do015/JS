function enviarNota(){
    var nota = document.getElementById("nota").value;
    
    
    if (nota){
        verificanota(nota);
    } 
    }
    
    // if considera verdadeiro != ''/[]/{},0, != null, true 
    
    function verificanota(valor){
        if (parseInt(valor) <= 3){
            alert("Reprovado HAHAHAHAHAHAHAHAHAHAHAH")
            document.getElementById('resultado').innerText ="Reprovado gay HAHAHAHAHAHAHAHAHAHAHAH"
        }    
        else if(parseInt(valor) >3 && parseInt(valor) <5){
            alert("Recuperação HAHAHAHHAHHAHAHAHAHAHHAHA")
            document.getElementById('resultado').innerText ="Recuperação HAHAHAHAHAHAHAHAHAHAHAH"
        } else {
            alert("Aprovado BB :)")
            document.getElementById('resultado').innerText ="Aprovado BB :)"
        }
    }