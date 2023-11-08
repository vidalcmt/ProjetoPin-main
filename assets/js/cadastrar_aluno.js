function prosseguirParaParte2() {
    document.getElementById('parte1').style.display = 'none';
    document.getElementById('parte2').style.display = 'block';
}

function prosseguirParaParte3() {
    document.getElementById('parte2').style.display = 'none';
    document.getElementById('parte3').style.display = 'block';
}

function prosseguirParaParte4() {
    document.getElementById('parte3').style.display = 'none';
    document.getElementById('parte4').style.display = 'block';
}

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }
