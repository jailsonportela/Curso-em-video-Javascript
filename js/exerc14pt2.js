function modelo(){ window.location.href='modelo.html' }

function verificar(){
    var img=document.createElement('img')
    img.setAttribute('id','foto')
    var bg=''
    var res=document.getElementById('res')
    var data=new Date()
    var dataatual=data.getFullYear()
    var nascimento=document.getElementById('nasc').value
    var resultado=dataatual-nascimento
    var sex=document.getElementsByName('radsex')

    if(resultado<0){
        bg='Data inválida'
    }else if(resultado>119){
        bg='Data inválida'
    }else if(!Number.isInteger(resultado)){
        bg='Data inválida'
    }else{
        if(resultado==0 && sex[0].checked){
            bg='Detectamos um recém nascido'
            img.setAttribute('src','design/image/recem.png')
       }else if(resultado==0 && sex[1].checked){
           bg='Detectamos uma recém nascida'
           img.setAttribute('src','design/image/recem.png')
       }else if(resultado>=0 && resultado<=13 && sex[0].checked){
           bg='Detectamos um menino de '+resultado+' anos'
           img.setAttribute('src','design/image/foto-bebe-m.png')
        }else if(resultado>=14 && resultado<18 && sex[0].checked){
            bg='Detectamos um jovem de '+resultado+' anos'
            img.setAttribute('src','design/image/foto-jovem-m.png')
        }else if(resultado>=18 && resultado<60 && sex[0].checked){
            bg='Detectamos um homem de '+resultado+' anos'
            img.setAttribute('src','design/image/foto-adulto-m.png')
        }else if(resultado>=60 && sex[0].checked){
            bg='Detectamos um idoso de '+resultado+' anos'
            img.setAttribute('src','design/image/foto-idoso-m.png')
        }else if(resultado>=0 && resultado<=13 && sex[1].checked){
            bg='Detectamos uma menina de '+resultado+' anos'
            img.setAttribute('src','design/image/foto-bebe-f.png')
         }else if(resultado>=14 && resultado<18 && sex[1].checked){
             bg='Detectamos uma jovem de '+resultado+' anos'
             img.setAttribute('src','design/image/foto-jovem-f.png')
         }else if(resultado>=18 && resultado<60 && sex[1].checked){
             bg='Detectamos uma mulher de '+resultado+' anos'
             img.setAttribute('src','design/image/foto-adulto-f.png')
         }else if(resultado>=60 && sex[1].checked){
             bg='Detectamos uma idosa de '+resultado+' anos'
             img.setAttribute('src','design/image/foto-idoso-f.png')
         }
    }

        res.innerText= bg
        res.appendChild(img)
    }