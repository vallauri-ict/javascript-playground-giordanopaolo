"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let lev = 0;
const Dim=10;
let txtvisible=false;
let _textsfondo=document.createElement("p");
///per responsive ricaricare la pagina
window.onload=function () {
    let _wall=document.getElementById("wall");
    let _wrapper=document.getElementById("wrapper");
    _wall.style.margin="0 auto";
    _wall.innerHTML="Clicca qui per scoprire l'immagine di sfondo";
    let _wallpaper=document.createElement("div");
    let altezza = window.screen.height;
    let larghezza = window.screen.width;
    _wallpaper.style.width=(larghezza-200)+"px";
    _wallpaper.style.height=altezza+"px";
    _wallpaper.style.textAlign="center";
    _wallpaper.style.margin="0 auto";
    _textsfondo.classList.add("testi");
    _textsfondo.style.color="white";
    _textsfondo.style.fontSize="xx-large";
    _textsfondo.classList.add("shig");
    _textsfondo.innerHTML="“Conobbi una ragazza sotto un ciliegio in piena fioritura e il mio fato cominciò a cambiare.” “Fermi tutti... com’è che chiamano questa sensazione...? com’è che chiamano questo sentimento...? è come essere... nel pieno della primavera. Durante la primavera del mio 14esimo anno di vita, ho cominciato a correre verso il futuro con te.” Queste le parole di Kousei Arima, un pianista prodigio, almeno fino alla morte della madre, a seguito della quale divenne incapace di suonare, come se avesse una voce che gli sussura all'orecchio, e che gli impedisse si sentire le note del piano. L'incontro con la violinista Kawori Miyazono porterà una nuova luce nella sua vita. La ragazza ha una personalità audace e dirompente, a differenza del protagonista, chiuso e tormentato dalla paura di suonare il piano, che rimane affascinato del modo come Kawori trasforma la musica. Ma dietro tutto questo, c'è qualcosa che Arima ancora non sa.";
    let _button=document.createElement("button");
    _button.classList.add("btn");
    _button.classList.add("btn-outline-primary");
    _button.classList.add("btn-lg");
    _button.classList.add("hover1");
    _button.style.backgroundColor="white";
    _button.style.margin="20px auto";
    _wall.addEventListener("click",aprisfondo);
    function aprisfondo(){
        _wrapper.appendChild(_wallpaper);
        _wall.innerHTML="Scorri in basso!";
        _button.innerHTML="Scopri il testo dell'immagine";
        _button.addEventListener("click",Scivitesto);
        _wallpaper.appendChild(_button);
        function Scivitesto(){
            
            if(!txtvisible){
                _wallpaper.appendChild(_textsfondo);
                _button.innerHTML="Chiudi testo";
                txtvisible=true;
            }
            else{
                _wallpaper.removeChild(_textsfondo);
                _button.innerHTML="Scopri il testo dell'immagine";
                txtvisible=false;
            }
                
        }
    }
	



}
let mostra=false;
function mostraanime(){
    let p=document.getElementById("anime");
    p.classList.add("testi");
    p.style.color="white";
    p.style.fontSize="xx-large";
    p.classList.add("shig");
    p.classList.add("col-md-10");
    if(!mostra){
        
        p.innerHTML="Il termine anime deriva dall'abbreviazione di animēshon (Che è la translitterazione del termine inglese 'Animation'='Animazione').<br/>Un Anime nel concreto è il cartone animato Giapponese la cui storia è derivata da un fumetto detto Manga.<br/>Mi piace trascorrere molto del mio tempo libero guardando anime di ogni genere anche se personalmente preferisco gli anime detti seinen, shonen e spokon.";
        mostra=true;
    }
    else{
        p.innerHTML="";
        mostra=false;
        
    p.classList.remove("shig");
    p.classList.remove("testi");


    }
}