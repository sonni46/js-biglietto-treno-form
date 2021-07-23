document.getElementById("genera").addEventListener("click",
function() {
    var nome = document.getElementById("nome").value;
    var km = document.getElementById("km").value;
    var eta = document.getElementById("eta").value;
    var prezzoFinale = km * 0.21;
    var codice = Math.floor(Math.random()* (100000 - 90000)) + 90000;
    var carrozza = Math.floor(Math.random()* 10) + 1;

    document.getElementById("carrozza").innerHTML = carrozza;

    document.getElementById("codice").innerHTML = codice;

    document.getElementById("prezzo").style.display = "block";

    document.getElementById("passegero").innerHTML = nome;

    if(eta == "minore") {
        prezzoFinale = prezzoFinale * 0.8;
        document.getElementById("prezzoFinale").innerHTML = prezzoFinale.toFixed(2) + " €";
        var sconto = eta;
        document.getElementById("sconto").innerHTML = "sconto " + sconto;
    }
    else if (eta == "over") {
        prezzoFinale = prezzoFinale * 0.6;
        document.getElementById("prezzoFinale").innerHTML = prezzoFinale.toFixed(2) + " €";
        var sconto = eta;
        document.getElementById("sconto").innerHTML = "sconto " + sconto;
    }
    else {
        prezzoFinale = km * 0.21; 
        document.getElementById("prezzoFinale").innerHTML = prezzoFinale.toFixed(2) + " €";
        var sconto = eta;
        document.getElementById("sconto").innerHTML = "sconto " +  sconto;
    }
}
)

document.getElementById("annulla").addEventListener("click",
function() {
    document.getElementById("prezzo").style.display='none';
}
)