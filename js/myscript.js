
let pulsante = document.getElementById('pulsante');


pulsante.addEventListener('click', function() { 
    //input km e anni utente
    let km_utente = document.getElementById("km").value;
    let anni_utente = document.getElementById("eta").value;

    //dichiaro prezzo per km
    const prezzo_al_chilometro = 0.21;

    //CALCOLO PREZZO INTERO DEL BIGLIETTO
    let prezzo_intero = (km_utente * prezzo_al_chilometro);

    //DICHIARIAZIONE VARIABILE PER LO SCONTO
    let scontoDaApplicare;
    
    //CONDIZIONE
    //SCONTO MINORENNI
    if (anni_utente < 18) {

        scontoDaApplicare = 0.20;
        console.log("sconto del 20%: " + scontoDaApplicare);

    }
    //SCONTO OVER 65
    else if (anni_utente >= 65) {

        scontoDaApplicare = 0.40;
        console.log("sconto del 40%: " + scontoDaApplicare);

    }
    //SCONTO A 0
    else {//if(anni_utente >=18 || anni_utente <= 65) {

        scontoDaApplicare = 0;
        console.log("sconto 0%: " + scontoDaApplicare);
    }

    //CALCOLO DELLO SCONTO SUL PREZZO INTERO
    let prezzo_finale = prezzo_intero - (prezzo_intero * scontoDaApplicare);

    //PREZZO FINALE
    let prezzo_finale_fixed = prezzo_finale.toFixed(2);
    console.log("prezzo finale: " + prezzo_finale_fixed);

    //RISULTATO A VIDEO
    let input = document.getElementById("risultato").innerHTML = prezzo_finale_fixed;

});

