function pais(){
    var txt = document.querySelector('input#txt')
    var r = txt.value
    if(r != 'Brasil'){
        var res = document.querySelector('div#res').innerHTML = `Seu país é ${r}, você é estrangeiro!`
    } else {
        var res = document.querySelector('div#res').innerHTML = `Seu país é ${r}, você é brasileiro!`
    }
}
/* if(pais != "Brasil"){
    console.log(`Vivendo em ${pais}, então você é estrangeiro!`)
} else{
    console.log(`Você mora no ${pais} então é brasileiro`)
} */