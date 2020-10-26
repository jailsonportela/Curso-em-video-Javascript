
function modelo(){ window.location.href='modelo.html' }

function cT(){
    var tab=document.getElementById('tabsel')
    var num=Number( document.getElementById('num').value )
    var qtd=1
    if(num==0){
        alert('todo número multiplicado por 0 é zero')
    }else{
        tab.innerText=' '
        for(qtd=1;qtd<=10;qtd++){
            var crop=document.createElement('option')
            tab.appendChild(crop)
            crop.innerHTML+=`${num} x ${qtd} = ${num*qtd}`
            
        }
    }
    
}

    
