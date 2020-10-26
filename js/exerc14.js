function modelo(){
    window.location.href='modelo.html'
}
function load(){
    var btnvoltar=document.getElementById('voltar')
    var sec=document.getElementById('sec')
    var boa=document.getElementById('boasv')
    var msg=document.getElementById('msg')
    var img=document.getElementById('imagem')
    var data= new Date()
    var hora=data.getHours()
    var min=data.getMinutes()
    msg.innerText='Já são '+hora+' horas e '+min+' minutos'
    if(hora>=5 && hora<12){
          boa.innerHTML='Bom Dia!'
          img.src='design/image/manha.png'
          document.body.style.background='#EED187'
    }else if(hora>=12 && hora<18){
        btnvoltar.style.background='#E1A065'
        msg.style.color='#FFCEA1'
        boa.innerHTML='Boa Tarde!'
        boa.style.color='#FFCEA1'
        img.src='design/image/tarde.png'
        document.body.style.background='#F1B277'
        sec.style.background='#FB9B42'
    }else if(hora>=18 || hora<5){
        btnvoltar.style.background='#373372'
        msg.style.color='#ABA6FB'
        boa.innerHTML='Boa Noite!'
        boa.style.color='#8981FF'
        img.src='design/image/noite.png'
        document.body.style.background='#2B317F'
        boa.style.color='#8981FF'
        sec.style.background='#443F92'
    }
}