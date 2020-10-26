function modelo(){
    window.location.href='modelo.html'
}
document.addEventListener('keydown',function enter(e){
    if(e.keyCode===13){
        logar()
    }
})

function logar(){
    let usu=document.getElementById('us').value
    let sen=document.getElementById('pasw').value
    let user=['eu']
    let password=['12345']
    if(usu===''|| sen===''){
        alert('preencha os campos!')
    }else if(user.indexOf(usu)===-1 || password.indexOf(sen)===-1){
       alert('usuário ou senha incorretos!')
    }else{
        alert('Bem vindo!')
    }
}