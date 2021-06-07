const celulas = document.querySelectorAll(".celula");
let checarTurno = true;

const jogadorX = "X";
const jogadorO = "O";
const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]


]

document.addEventListener("click", (event) =>{
    if(event.target.matches(".celula")){
    // console.log (event.target.id)
    jogar(event.target.id)
    }
})


function jogar(id) {
    const celula = document.getElementById(id);
    turno = checarTurno ? jogadorX : jogadorO
    celula.textContent = turno;
    celula.classList.add(turno);
    
    checarVencedor(turno)
    // console.log(checarTurno)

}

function checarVencedor (turno){
    const vencedor = combinacoesVitoria.some((combinacoes) => {
        return combinacoes.every((index) => {
            return celulas[index].classList.contains(turno)
        })
    })
    
    if (vencedor){
        encerraJogo(turno)
    } else if (checarEmpate()) {
        encerraJogo()
    } else {
        checarTurno = !checarTurno;
    }

}

function checarEmpate(){
    let x = 0
    let o = 0

    for (index in celulas) {
        if (!isNaN(index)){
            if (celulas[index].classList.contains(jogadorX)){
                x++
            }
            if (celulas[index].classList.contains(jogadorO)){
                o++ 
            }
        }
    }

    return x + o === 9 ? true : false; 
}

function encerraJogo (vencedor = null ) {
    const telaEscura = document.getElementById("tela-escura")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    h2.style.marginTop = "400px"
    let mensagem = null

    telaEscura.style.display = "block"
    telaEscura.appendChild(h2)
    telaEscura.appendChild(h3)

    if (vencedor) {
        h2.innerHTML = `O jogador ${turno} venceu`
    } else {
        h2.innerHTML = `Empatou`
    }
}
