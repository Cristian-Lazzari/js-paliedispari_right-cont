/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const result = document.querySelectorAll(".result");

let userWord = prompt('get word');

let arrWord = [];
for (let i = 0; i < userWord.length; i++){
    arrWord[i]=userWord[i]
}
console.log(arrWord);

let reverseword = [];
for (let i = 0; i < userWord.length; i++){
    let reversecount = arrWord.length - 1;
    reverseword[i] = arrWord[reversecount - i]
}
console.log(reverseword)
let truevalue=0
for(let i = 0; i < userWord.length; i++){
    if(arrWord[i] !== reverseword[i]){
    truevalue = 1
    } 

}
if(truevalue == 0){
    console.log('palindroma')
    result.innerHTML += 'palindroma'
    
} else{
    console.log('non palindroma')
    result.innerHTML += 'non palindroma'
}



