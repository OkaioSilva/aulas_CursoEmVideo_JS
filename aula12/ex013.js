var agora = new Date()
var H = agora.getHours()
console.log(`Agora são exatamente ${H} horas`)
if(H < 12){
    console.log('Bom dia!')
} else if(H <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
