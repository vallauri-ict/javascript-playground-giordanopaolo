"use strict";
let vet=[];
let _sfondo2=document.getElementById("wrapper");
let _Lettera;
let border;
let dime;
let sfondo1;
let si;
window.onload=function(){
    si=0;
    sfondo1=0;
    border=document.getElementById("titolo")

}
function Colore(){


    /*let aus.style.color=document.getElementById("wrapper").style.backgroundColor;
    document.getElementById("wrapper").style.backgroundColor=document.getElementById("titolo").style.color;
    document.getElementById("titolo").style.color=aus.style.color;*/
    if(si==0)
    {
        document.getElementById("titolo").style.color="blue";
        document.getElementById("titolo").style.backgroundColor="yellow";
        si=1;
    }
    else{
        document.getElementById("titolo").style.color="yellow";
        document.getElementById("titolo").style.backgroundColor="blue";
        si=0;
    }

}
function dim(){
    dime=document.getElementById("txtSize");

    document.getElementById("titolo").style.fontSize = dime.value + "pt";
    console.log(dime.value);
}
function sfondo(){
    if(sfondo1==0) {
        sfondo1 = 5;
        document.getElementById("wrapper").style.cssText += "background-image: url(bg.gif); repeat y; center; "
    }
    else
    {
        sfondo1=0;
        document.getElementById("wrapper").style.backgroundImage=null;
    }


}
/*function bordo(){
    if(getComputedStyle(border).visibility=="hidden")
        border.style.visibility="visible";
    else
        border.style.visibility="hidden";
}*/
let aus;
function immagine(aus) {
    if(aus==1)
        document.getElementById("wrapper").style.backgroundImage="url("img1.jpg")"
    else if(aus==2)
        document.getElementById("wrapper").style.backgroundImage="url("img2.jpg")"
    else if(aus==3)
        document.getElementById("wrapper").style.backgroundImage="url("img3.jpg")"
}
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
