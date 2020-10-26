
function modelo(){
    window.location.href='modelo.html'
}
function contar(){
    var i=document.getElementById('ini')
    var fim=document.getElementById('fim')
    var passo=document.getElementById('pas')
    var cont=document.getElementById('contagem')
    cont.innerHTML=''
    var start=Number(i.value)
    var end=Number(fim.value)
    var pass=Number(passo.value)
    if(i.value==''|| end==0){
        alert('coloque os números')
    }else if(pass==0){
        alert('Passo alterado para 1')
        pass=1
        passo.value=1
        for(start=start;start<=end;start+=pass){
            cont.innerText+=start+String.fromCodePoint(128073)
        }
        cont.innerHTML+=String.fromCodePoint(128721)
    }else{
        for(start=start;start<=end;start+=pass){
            cont.innerText+=start+String.fromCodePoint(128073)
        }
        cont.innerHTML+=String.fromCodePoint(128721)
    }
     


}
