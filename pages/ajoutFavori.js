let card01 = document.querySelector("#card01 .cardIUT__favorite__button");
let card02 = document.querySelector("#card02 .cardIUT__favorite__button");
let card03 = document.querySelector("#card03 .cardIUT__favorite__button");
let card04 = document.querySelector("#card04 .cardIUT__favorite__button");
let card05 = document.querySelector("#card05 .cardIUT__favorite__button");
let card06 = document.querySelector("#card06 .cardIUT__favorite__button");
let card07 = document.querySelector("#card07 .cardIUT__favorite__button");
let nombreCarte = 7;

for (let i = 1; i <= nombreCarte; i++) {
    if (localStorage.getItem(`9903_Carte_0${i}`)) {
        switch (i) {
            case 1: card01.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 2: card02.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 3: card03.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 4: card04.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 5: card05.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 6: card06.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
            case 7: card07.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
                break;
        }
    }
}

function estCeSelectionnee(carte) {
    for (let i = 0; i < carte.parentElement.classList.length; i++) {
        if (carte.parentElement.classList[i] == "cardIUT__favorite--selected") {
            return true;
        }
    }
    return false;
}

function ajoutFavori(carte, numeroCarte) {
    if (estCeSelectionnee(carte)) {
        carte.parentElement.className = "cardIUT__favorite";
        if (localStorage.getItem(`9903_Carte_${numeroCarte}`)) {
            localStorage.removeItem(`9903_Carte_${numeroCarte}`);
        }
    }
    else {
        carte.parentElement.className = "cardIUT__favorite cardIUT__favorite--selected";
        localStorage.setItem(`9903_Carte_${numeroCarte}`, "true");
    }
}

card01.addEventListener("click", () => {
    ajoutFavori(card01, "01");
});

card02.addEventListener("click", () => {
    ajoutFavori(card02, "02");
});

card03.addEventListener("click", () => {
    ajoutFavori(card03, "03");
});

card04.addEventListener("click", () => {
    ajoutFavori(card04, "04");
});

card05.addEventListener("click", () => {
    ajoutFavori(card05, "05");
});

card06.addEventListener("click", () => {
    ajoutFavori(card06, "06");
});

card07.addEventListener("click", () => {
    ajoutFavori(card07, "07");
});