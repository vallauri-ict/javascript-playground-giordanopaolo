"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let _selection;
let _Nom;
let _chk;
let _txt;
let _se;
let _cap;
window.onload=function () {
    _chk=document.getElementById("chk");
    _txt=document.getElementById("txt");
    _Nom=document.getElementById("nominativo");
    _cap=document.getElementById("cap");
    _se=document.getElementsByName("sesso");
    _selection=document.getElementById("ateneo");


}
function cantrollanum(str) {
    let i=0;
    while((i<str.length)&&(isNaN(str[i++])));
    if(!isNaN(str[i-1]))
        return true
    else
        return false
}
function validaform() {
    if(_Nom.value==""||cantrollanum(_Nom.value))
    {
        _Nom.style.borderBottom="5px solid red";
        alert("il nominativo contiene numeri o è mancante");
        return false;
    }
    else if(_se[0].checked==false&&_se[1].checked==false)
    {

        alert("manca il sesso");
        return false;
    }
    else if(_selection.selectedIndex==0)
    {
        _selection.style.borderBottom="5px solid red";
        alert("devi selezionare una regione");
        return false;
    }
    else if(textcompl(_txt.value))
    {
        alert("devi immettere una descrizione");
        return false;
    }
}
function textcompl(str) {
    let vet = [];
    vet = str.split("");
    if (vet.length>0)
        return false;
    else
        return true;
}
function Nome(){
    let str=_Nom.value;
    let i=0;
    while((i<str.length)&&(isNaN(str[i++])));
    if(!isNaN(str[i-1]))
        alert("il nominativo contiene numeri");
}
function desk() {
    if(_chk.checked)
        _txt.disabled=false;
    else
        _txt.disabled=true;
}
function caratteri() {
    let vet = [];
    vet = _cap.value.split("");
    let i = 0;
    if (vet.length != 5)
        alert("il cap deve essere di 5 numeri");
    while ((isNaN(vet[i])) && (i++ < 5))
        if (i != 5)
            alert("il cap deve essere di 5 numeri");

}