Il sistema a griglia di Bootstrap utilizza una serie di contenitori, righe e colonne per impaginare e allineare il contenuto. 
Esso è costruito con flexbox ed è completamente responsive.
I contenitori forniscono un mezzo per centrare e riempire orizzontalmente i contenuti del tuo sito. 
Si usa .container per una larghezza di pixel reattiva o .container-fluid per larghezza: 100% su tutte le dimensioni di vista e dispositivo.
Le righe sono wrapper per le colonne. Ogni colonna ha un'imbottitura orizzontale per controllare lo spazio tra di loro
In un layout a griglia, il contenuto deve essere posizionato all'interno di colonne e solo le colonne possono essere figlie immediate delle righe.
Grazie a flexbox, le colonne della griglia senza una larghezza specificata verranno automaticamente layout come colonne di uguale larghezza. 
Ad esempio, quattro grandezze di .col-sm saranno ciascuna automaticamente larghe del 25% dal piccolo punto di interruzione e fino. 
Vedere la sezione delle colonne di layout automatico per ulteriori esempi.
Le classi di colonne indicano il numero di colonne che desideri utilizzare tra i 12 possibili per riga. Quindi, se vuoi tre colonne di uguale larghezza, puoi usare .col-4.
Le larghezze delle colonne sono impostate in percentuale, quindi sono sempre fluide e dimensionate rispetto al loro elemento principale.
Le colonne hanno un'imbottitura orizzontale per creare le grondaie tra le singole colonne, tuttavia è possibile rimuovere il margine dalle righe e l'imbottitura dalle colonne con .no-grondaie sul .row.
Per rendere la griglia reattiva, ci sono cinque punti di interruzione della griglia, uno per ciascun punto di interruzione reattivo: tutti i punti di interruzione (extra piccolo), piccolo, medio, grande ed extra grande.
È possibile utilizzare classi di griglia predefinite.