function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img/pDia.jpg';
        document.body.style.background = "#DAA520"
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/pTarde.jpg'
        document.body.style.background = "#F4A460"
    } else{
        //BOA NOITE
        img.src = 'img/pNoite.jpg'
        document.body.style.background = "#4F4F4F"
    }
}
