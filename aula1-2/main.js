function somar(e) {
    e.preventDefault();
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");
    let res = Number(n1.value) + Number(n2.value);

    alert("O resultado da soma é: " + res);
}

function subtrair(e) {
    e.preventDefault();
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");
    let res = Number(n1.value) - Number(n2.value);

    alert("O resultado da subtração é: " + res);
}

function multi(e) {
    e.preventDefault();
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");
    let res = Number(n1.value) * Number(n2.value);

    alert("O resultado da multiplicação é: " + res);
}

function primo(e){
    e.preventDefault();
    let n = document.getElementById("numero");
    num = Number(n.value);

    s = 0;

    for(var i = 0; i <= num;i++){
        if(num % i == 0){
           s++;
        }
    }
    if(s == 2){
        alert("O numero " + num + " é primo");
    } else{
        alert("O numero " + num + " não é primo");        
    }
}

function operacao(){
    
}