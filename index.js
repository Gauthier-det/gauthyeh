let titre = document.getElementById("titreGaut");
let change_couleur = document.getElementsByClassName("couleur_change");

titre.innerHTML = "Bienvenue, moi c'est ";
for (let i = 0; i < change_couleur.length; i++) {
    change_couleur[i].style.color = "blue";
}