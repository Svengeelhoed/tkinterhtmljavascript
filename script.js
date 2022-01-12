var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Licht uit';
document.body.appendChild(btn);

// schijf hier tussen je code
HuidigeKleur = "yellow"
document.body.style.background = "yellow";

function Achtergrond() { 
    btn.innerHTML = ""
    if (HuidigeKleur == "black"){
        btn.innerHTML = "Licht uit"
        HuidigeKleur = "yellow" 
         console.log("Licht aan")
    }else{
    HuidigeKleur = "black"
     console.log("Licht uit")
     btn.innerHTML = "Licht aan"
    }document.body.style.background = HuidigeKleur;}


btn.onclick = function(){ 
    Achtergrond(HuidigeKleur)
}
// schijf hier tussen je code