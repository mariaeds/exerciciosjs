function verificar() {
    let texto = document.getElementById('txt_user');
    texto = texto.value.toString();
    
    let cont = texto.toLowerCase().match(/[aeiou]/ig || []).length;

    alert(`O numero de vogais é ${cont}`);

}
