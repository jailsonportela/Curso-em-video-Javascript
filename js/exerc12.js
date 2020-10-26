var agr= new Date()
var hora=agr.getHours()
var min=agr.getMinutes()
var diasem= agr.getDay()
switch(diasem){
    case 0:
        diasem='Domingo'
        break
    case 1:
        diasem='Segunda-feira'
        break
    case 2:
        diasem='Terça-feira'
        break
    case 3:
        diasem='Quarta-feira'
        break
    case 4:
        diasem='Quinta-feira'
        break
    case 5:
        diasem='Sexta-feira'
        break
    case 6:
        diasem='Sábado'
        break                 
}
console.log('Hoje é '+diasem +' '+hora+':'+min)

if(hora>6 && hora<12){
 console.log('bom dia!')
}else{
    if(hora>=12 && hora<18){
        console.log('boa tarde!')
    }else{
        if(hora>=18){
            console.log('boa noite!')
        }
    }
}