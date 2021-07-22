document.getElementById("genera").addEventListener("click",
function() {
    var nome = document.getElementById("nome").value;
    var km = document.getElementById("km").value;
    var eta = document.getElementById("eta").value;
    var prezzoFinale = km * 0.21;   
    document.getElementById("prezzo").style.display="block";
    if(eta == "minore") {
        prezzoFinale = prezzoFinale * 0.8;
        document.getElementById("prezzoFinale").innerHTML = prezzoFinale.toFixed(2);
    }
    else if (eta == "over") {
        prezzoFinale = prezzoFinale * 0.6;
        document.getElementById("prezzoFinale" + " €").innerHTML = prezzoFinale.toFixed(2);
    }
    else {
        prezzoFinale = km * 0.21; 
        document.getElementById("prezzoFinale").innerHTML = prezzoFinale.toFixed(2) + " €";
    }
}
)

document.getElementById("annulla").addEventListener("click",

function() {
    document.getElementById("prezzo").style.display='none';
}
)