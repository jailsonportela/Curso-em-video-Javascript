
function modelo(){
    window.location.href='modelo.html'
}
let gnum=[]
document.addEventListener('keydown',function atalho(a){
    if(a.keyCode===13){
        putnum()
    }
})
function putnum(){
let num=Number(document.getElementById('num').value)
var op=document.createElement('option')
var tab=document.getElementById('tabsel')
if(num>100 || num<1){
    alert('coloque um valor entre 1 e 100!')
}else if(gnum.indexOf(num)!==-1){
    alert('número já existente na lista!')
}else{
    gnum.push(num)
    op.innerText=`valor ${num} adicionado`
    tab.appendChild(op)
}

}
function usenum(){
    let num=Number(document.getElementById('num').value)    
    var all=document.getElementById('aotodo')    
    var soma=0
    var mai=gnum[0]
    var men=gnum[0]
    var i=0
    if(num===0){
        alert('ponha valores primeiro!')
    }else{
        for(i=0;i<gnum.length;i++){
            soma+=gnum[i]
            if(gnum[i]>mai){
              mai=gnum[i]
            }else if(gnum[i]<men){
                men=gnum[i]
            }
          }
        all.innerHTML =`<p>Ao todo temos ${gnum.length} números</p>`
        all.innerHTML+=`<p>A soma de todos os valores é ${soma}</p>`
        all.innerHTML+=`<p>a média dos valores é ${soma/gnum.length}</p>`
        all.innerHTML+=`<p>o maior número é ${mai}</p>`
        all.innerHTML+=`<p>o menor número é ${men}</p>`
    }


}
    
