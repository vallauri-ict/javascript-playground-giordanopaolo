window.onload=function () {
    let bottone=document.getElementById("cambiocard");
    bottone.innerHTML="Attrezzi";
    cambio();
}

let Es=true;
let titoli = ["Stacco",
"Panca piana",
"Squat",
"Alzate laterali",
"Sit up",
"Standing calf",
"Curl con bilancere",
"dip su panca",
"Bilancere",
"Manubri",
"Elastici",
"Dischi",
"Palla medica",
"Barra per trazioni",
"Panca generale",
"Tappetino"];
let testi = ["Lo stacco da terra è uno degli esercizi fondamentali che coinvolge lo sviluppo di gran parte dei muscoli del corpo umano. Insieme a squat e distensioni su panca è uno degli esercizi componenti del powerlifting.",
"La distensione su panca piana, o più semplicemente panca (in inglese bench press) è un esercizio fisico con i pesi. In realtà il nome tecnicamente corretto sarebbe estensioni su panca poiché la distensione è in realtà un movimento generato dalla contrazione eccentrica dei muscoli flessori.",
"Lo squat, insieme agli stacchi da terra e alle distensioni su panca piana, è uno degli esercizi fondamentali dell'allenamento con i pesi. Nello specifico è quello principale per lo sviluppo degli arti inferiori, ed in quanto multiarticolare recluta molti muscoli del lower body, ma anche l'addome ed altro.",
"Le Alzate lateriali, in inglese Lateral raise, Side raise o Shoulder fly, sono un esercizio con i pesi mirato prevalentemente alla stimolazione del capo laterale del muscolo deltoide.",
"Il sit-up è un esercizio a corpo libero solitamente utilizzato per rafforzare la muscolatura addominale, in particolare il retto dell'addome. ",
"Calf raises in cui la flessione plantare avviene a gamba estesa: questa categoria di esercizi è rappresentata principalmente dalla standing calf raise, calf press o donkey calf, ed e rivolta soprattutto allo stimolo del gastrocnemio.",
"Il curl con bilanciere è l’esercizio che vi consente di sollevare il maggior carico possibile per rinforzare questo tratto del braccio.",
"I piegamenti o dip su panca piana servono ad allenare i tricipiti. Questo esercizio rispetto al dip alle parallele coinvolge molto meno i pettorali. Se abbiamo tricipiti molto sviluppati, l'esercizio può risultare troppo leggero, resta pur sempre valido come riscaldamento.",
"Il bilanciere è un attrezzo ampiamente utilizzato nelle palestre, nelle attività come sollevamento pesi, powerlifting, bodybuilding.",
"Il manubrio è un attrezzo utilizzato in pesistica. Il suo utilizzo più frequente avviene con una coppia di manubri, con esercizi effettuati impugnandone uno per mano anche se non mancano esercizi a mano singola in particolar modo per braccia e dorsali",
"Gli elastici fitness ti aiutano a tonificare e ad allungare i muscoli di tutto il corpo: braccia, gambe, addominali e glutei. Gli esercizi da fare in casa o al parco con gli elastici fitness sono molti e possono essere eseguiti dappertutto. Insomma, il workout con gli elastici fitness è un’attività molto pratica per chi non ha molto spazio e per chi ha poco tempo.",
"Dischi conosciuti nel mondo del fitness anche come bumper, sono dei dischi per bilanciere realizzati in gomma dura per garantire l’atterraggio di un bilanciere carico senza rischi di danneggiare i dischi, la piattaforma di sollevamento o, nel caso della maggior parte delle palestre da garage, il pavimento. Inoltre, utilizzando i dischi in gomma, il sollevamento pesi diventa molto più silenzioso e quindi più adatto per l’allenamento a casa. I dischi bilanciere classici da sollevamento invece sono fatti in ghisa",
"La palla medica è un attrezzo realizzato in vinile o in pelle e riempito di sabbia, molto utilizzato in fisioterapia per la riabilitazione e in vari sport (pallavolo, calcio e rugby, per esempio), sia per potenziare la muscolatura, che per migliorare movimenti, resistenza, forza e velocità. La palla è costruita in modo da non sgonfiarsi e da non recare danni al suo lancio; ha solitamente un diametro di 35 cm e un peso superiore o uguale ad 1 kg",
"La barra per trazioni viene utilizzata per allenare la parte alta del corpo come: spalle, braccia e pettorali. Grazie a questa utilissima asta per trazioni sarà possibile scolpire tutta la parte superiore del corpo in modo rapido ma soprattutto comodamente da casa propria",
"Una panca è uno strumento progettato per l'allenamento in palestra e con cui è possibile allenare diversi tipi di muscoli. La panca è un banco di allenamento con i pesi.Essa è molto simile ad una semplice panca ma è stata progetta per essere utilizzata all'interno di una palestra.",
"Si tratta di un supporto utilissimo, sia per chi frequenta le palestre, ma anche per chi ama allenarsi in casa, da utilizzarsi ogni qualvolta si pratichino esercizi a corpo libero in appoggio a terra. Il tappetino da fitness protegge infatti la schiena e le articolazioni, assorbendo gli urti e offre un comfort ottimale."]
function cambio(){
    ///per responsive ricaricare la pagina
    let bottone=document.getElementById("cambiocard");
    let cards1=document.getElementsByClassName("card1");
    let cards2=document.getElementsByClassName("card2");
    let contenitore=document.getElementsByClassName("mg")///involucro di img e testo
    let img=document.getElementsByTagName("img")
    let _titoli=document.getElementsByClassName("card-title")///titoli carte

    let _testi=document.getElementsByClassName("card-text")
    if(!Es){
        for(let i=0;i<8;i++){
        
            img[i+1].src="img/atr"+(i+1)+".jpg"
            _titoli[i].innerHTML=titoli[8+i]
            _testi[i].innerHTML=testi[8+i]
            
        }
        bottone.innerHTML="Esercizi"
        Es=!Es;
    }
    else{
        for(let i=0;i<8;i++){
            img[i+1].src="img/es"+(i+1)+".jpg"
            _titoli[i].innerHTML=titoli[i]
            _testi[i].innerHTML=testi[i]
            
        }
        Es=!Es;
        bottone.innerHTML="Attrezzi"
    }
}
function apri(){
    window.open("documento.pdf")
}