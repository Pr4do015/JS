function enviarAcertos(){
    
    var numeroAcertos = parseInt(document.getElementById("acertos").value);
    var zero = document.getElementById("acertos").value;

    if (numeroAcertos <0 || numeroAcertos >6){
        alert("ERRO, O valor informado deve estar entre 0 e 6");
        return;

    }

    if (numeroAcertos){
        verificanota(numeroAcertos);
    }

        
    }
    // if considera verdadeiro != ''/[]/{},0, != null, true 
    
    function verificanota(valor){

        switch (valor) {
            case 1:
                alert("A nota do aluno é 'E'")
                document.getElementById('resultado').innerText ="A nota do aluno é 'E'"
                break;

            case 2:
                alert("A nota do aluno é 'D'")
                document.getElementById('resultado').innerText ="A nota do aluno é 'D'"
                break;

            case 3:
                alert("A nota do aluno é 'C'")
                document.getElementById('resultado').innerText ="A nota do aluno é 'C'"
                break;

            case 4:
                alert("A nota do aluno é 'B'")
                document.getElementById('resultado').innerText ="A nota do aluno é 'B'"
                break;

            case 5:
                alert("A nota do aluno é 'A'")
                document.getElementById('resultado').innerText ="A nota do aluno é 'A'"
                break;
        
            default:
                break;
        }
    }