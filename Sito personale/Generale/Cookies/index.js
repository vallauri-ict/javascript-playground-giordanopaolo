//scriviCookie('mio_nome','Antonio',60);
    //let i=leggiCookie('mio_nome');
    window.onload=function () {}

function scriviCookie(nomeCookie,valoreCookie,durataCookie)
{
  let scadenza = new Date();
  let adesso = new Date();
  scadenza.setTime(adesso.getTime() + (parseInt(durataCookie) * 60000));
  document.cookie.value = nomeCookie + '=' + valoreCookie + '; expires=' + scadenza.toGMTString() + '; path=/';
}
function controlla(){
    let nome=document.getElementById("nome");
    let mail=document.getElementById("mail");
    let ok=true;
    if(nome.value=="")
    {
        ok=false
        alert("Il nome deve essere compilato");
    }
    else if(mail.value=="")
    {
        ok=false;
        alert("La mail deve essere compilata");
    }
    if(ok){
        scriviCookie("nominativo",nome,600);
        scriviCookie("mail",mail,600);
        let corpo=document.getElementById("contesto");
        let btn=document.createElement("button");
        btn.innerHTML="Torna al sito";
        btn.classList.add("btn")
        btn.classList.add("btn-secondary")
        corpo.appendChild(btn);
        btn.addEventListener("click",tornaalsito);

    }
    function tornaalsito(){
        window.open("../index.html","_self")
    }
        
}