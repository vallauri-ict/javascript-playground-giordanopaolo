"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let lev = 0;
let txtvisible=false;
window.onload=function () {
    ///per responsive ricaricare la pagina
    let _clock=document.getElementById("clock");
    let _primo=document.getElementById("d1");
    let _altri=document.getElementsByClassName("nprimo");
    let altezza = window.screen.height-250;
    let larghezza = (window.screen.width-100)/6;
    _primo.style.width = ((larghezza*2)-20)+"px";
    _primo.style.height = altezza+"px";
    _primo.style.margin = "10px";
    _primo.style.border = "4px solid white";
    for(let i=0;i<_altri.length;i++)
        {
            _altri[i].style.width = larghezza+"px";
            _altri[i].style.height = altezza+"px";
            _altri[i].style.margin = "10px";
            _altri[i].style.border = "4px solid white";
        }
    setInterval(Orologio,1000);
    function Orologio(){

        let data = new Date();
        let mn, or, gg, mm, aaaa;
        mn = data.getMinutes();
        or = data.getHours()+":";
        gg = data.getDate() + "/";
        mm = data.getMonth() + "/";
        aaaa = data.getFullYear()+"  ";
        _clock.style.fontSize="25pt"
        _clock.innerHTML = "Oggi è il " + gg + mm + aaaa + " sono le ore " + or + mn;
    }
        
}
function caricapagina(n){
    if(n==1)
        window.open("../Vita/index_vita.html","_self");
    else if(n==2)
        window.open("../Palestra/index_palestra.html","_self");
        else if(n==3)
            window.open("../Anime/index_anime.html","_self");
            else if(n==4)
                window.open("../Isaac/index_Isacco.html","_self");
                    else if(n==6)
                    window.open("Cookies/Iscriviti!!.html","_self");
                    else window.open("Curriculum_Giordano_Paolo.pdf");
    
}