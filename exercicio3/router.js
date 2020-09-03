function carregarConteudo(){
    let path = window.location.pathname;
    let html = "";
    switch (path){
        case "/":
            html = "form.html";
    }


    let container = document.getElementById('container');

    if(html != ""){
        fetch(html)
            .then(function(resposta){
                return resposta.text();
            })
            .then(function (texto){
                container.innerHTML = texto;
            });
    }

    console.log();
}

window.addEventListener("load",function() {
    carregarConteudo();
})