"use strict";
var _display;
var opr="";
var primo;
var secondo;
var cont=0;
var sec=0;
var ris;
window.onload=function(){
    _display=document.getElementById("txtDisplay");

}
function scrivi(num){
    _display.value+=num;
    cont++;
    sec++;
}
function resetta() {
    primo=0;
    secondo=0;
    ris=0;
    _display.value="";
}
function op(operando) {
    primo=_display.value;
    console.log(primo);
    if(operando==0)
    {
        _display.value+="/";
        opr=0;

    }
    else if(operando==1)
    {
        opr=1;
        _display.value+="*";
    }
    else if(operando==2)
    {
        opr=2;
        _display.value+="-";
    }
    else if(operando==3)
    {
        opr=3;
        _display.value+="+";
    }
    console.log(opr);
    cont++;
    sec=cont;
    cont=0;
    console.log(cont);


}
function calcola() {
    secondo = _display.value.substring(sec-1, sec+cont-1);
    console.log(secondo);
    if(opr==0)
    {
        ris=primo/secondo;
    }
    else if(opr==1)
    {
        ris=primo*secondo;
    }
    else if(opr==2)
    {
        ris=primo-secondo;
    }
    else if(opr==3)
    {
        ris=primo+secondo;
    }
    primo=ris;
    _display.value=ris;

}
function generaNumero(Min,Max){

    var n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}