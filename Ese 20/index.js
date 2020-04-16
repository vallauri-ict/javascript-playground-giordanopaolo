"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let _Cognome;
let _nome;
let _matricola;
let _selection;
let _email;
let _telefono;
window.onload=function () {
    _email=document.getElementById("email");
    _telefono=document.getElementById("telefono");
    _selection=document.getElementById("regione");
    _Cognome=document.getElementById("cognome");
    _nome=document.getElementById("nome");
    _matricola=document.getElementById("matricola")


}
function validaform() {
    if(_Cognome.value=="")
    {
        alert("Manca il cognome");
        _Cognome.style.borderBottom="5px solid red";
        return false;
    }
    else if(_nome.value=="")
    {
        _Cognome.style.borderBottom="1px solid lightblue";
        alert("Manca il nome");
        _nome.style.borderBottom="5px solid red";
        return false;
    }
    else if(_matricola.value=="")
    {
        _nome.style.borderBottom="1px solid lightblue";
        _matricola.style.borderBottom="5px solid red";
        alert("Manca la matricola");
        return false;
    }
    else if(isNaN(parseInt(_matricola.value)))
    {
        _matricola.style.borderBottom="5px solid red";
        alert("la matricola deve essere un numero");
        return false;
    }
    else if(_selection.selectedIndex==0)
    {
        _matricola.style.borderBottom="1px solid lightblue";
        _selection.style.borderBottom="5px solid red";
        alert("devi selezionare una regione");
        return false;
    }
    else if(_email.value==""&&_telefono.value=="")
    {
        _selection.style.borderBottom="1px solid lightblue";
        _email.style.borderBottom="5px solid red";
        _telefono.style.borderBottom="5px solid red";
        alert("devi immettere una mail o un numero di telefono");
        return false;
    }



}