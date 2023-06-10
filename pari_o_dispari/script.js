
/* Utente sceglie pari o dispari 
utente sceglie un numero tra uno e 5 
computer genera random un num tra uno e 5
sommare numeri
se somma uguale a qulello che ha scelto utente utente vince
else perde
*/


/* selezione componenti html */
const pod = document.querySelector("#pod")
const utente = document.querySelector(".utente")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
/******/



btn.addEventListener('click',
function () {
    let podv = pod.value ;
    let utentev = parseInt(utente.value) 
    result.innerHTML = 'You are a...'
    console.log(podv)
    console.log(utentev)
    let computerv = ComputerGame()
    let sum = computerv + utentev;
    let winnerValue= '';
    if(sum %2 == 0){
        winnerValue = 'pari'
    } else{
        winnerValue = 'dispari'
    }
    console.log(winnerValue)
    console.log(sum)
    if(winnerValue == podv){
        result.innerHTML+= 'WINNER'
    } else{
        
        result.innerHTML+= 'LOSER'
    }

})

function ComputerGame(){
    let Computer = randomN (1, 5)
    console.log(Computer)
    return Computer
}
function randomN (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }