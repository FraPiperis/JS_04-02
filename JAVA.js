// PRIMO ESERCIZIO
function controllo(n1, n2) { 
if (n1 === 50 || n2 === 50 || (n1+n2) === 50) { 
    return true; } 
    else { 
    return false;
    } 
} 

console.log(controllo(20,30)); 



// SECONDO ESERCIZIO 
function rimuovo(stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.length) {
        return stringa;
    } else {
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}
}
console.log(rimuovo("Ciao",3)); 



//TERZO ESERCIZIO 
function controllo(n1, n2) {
    if (n1 >= 40 && n2 >= 40 && n1 <=60 && n2 <= 60 || n1 >= 70 && n2 >= 70 && n1 <= 100 && n2 <= 100)
        {
         return true;
        }
}
console.log(controllo(35,60)); 



//QUARTO ESERCIZIO
function NomeCittà(città) {
    if(città.startsWith("Los") || città.startsWith("New")) {
        return città;
    } else {
        return false;
    }
}

console.log(NomeCittà("San Marino"))



//QUINTO ESERCIZIO



//SESTO ESERCIZIO 
function controllo(array) {
    if(!array.includes(1) && !array.includes(3)) {
        return true; 
    } else {
        return false; 
    } 
}

console.log(controllo([4,7,9,10])); 



//SETTIMO ESERCIZIO
function angoli(gradi) {
    if (gradi < 90) {
        return "acuto"
    }
    if (gradi > 90 && gradi < 180) {
        return "ottuso"
    }
    if (gradi === 90) {
        return "retto"
    }
    if  (gradi === 180) {
        return "piatto"
    }
}
console.log(angoli(73)); 



//OTTAVO ESERCIZO
const FunzioneFrase = "Che importanza avete ora";

let frase = "Che Importanza Avete Ora"
function acronimo(str) {
    const parole = str.split("")
    const PrimaLettera = []
    parole.forEach((parola) => {
            if(parola.length > 0) {
                parola.toUpperCase()
                PrimaLettera.push(parola[0])
            }
    })
    const esercizio = PrimaLettera.join("")

    return esercizio
}

console.log(acronimo(frase))


//ESERCIZI EXTRA 







