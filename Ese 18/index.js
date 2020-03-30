"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let _imgbox;
let _imgRoll;
let _opts;
let _lst;
window.onload=function ()
{
    _imgbox=document.getElementById("imgBox");
    _imgRoll=document.getElementById("imgRoll");
    _imgbox.style.backgroundImage="url('IMG/img1.jpg')";
    _imgRoll.style.backgroundImage="url('IMG/img1.jpg')";
    _lst=document.getElementById("lstImmagini");
    _opts=document.getElementsByName("opt");
    setRadioButtonsClick();
}
function setRadioButtonsClick() {
    for(let i = 0;i < _opts.length ; i++)
        _opts[i].setAttribute("onclick","cambiaImmagine("+_opts[i].value+")");
    ///_opts[i].addEventListener("click",function (){cambiaImmagine(this.value)});
}
function cambiaImmagine(num) {
    let nume=Number(num);
    nume++;

    _imgbox.style.backgroundImage="url('IMG/img"+nume+".jpg')"
    nume--;
    _lst.value=nume;
    _opts[num].checked=true;
}
function roll_on() {
    let n = generaNumero(2,4);
    _imgRoll.style.backgroundImage="url('IMG/img"+n+".jpg')";
}
function roll_off() {
    _imgRoll.style.backgroundImage="url('IMG/img1.jpg')";
}