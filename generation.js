/**
 * Générer un mot de passe à partir d'un mot ou d'un groupe de mot donné
 * respectant les conditions de validation de la majorité des sites:
 * - Minimum 8 caractères (10 caractères?)
 * - Minimum 1 MAJUSCULE (65 à 90)
 * - Minimum 1 minuscule (97 à 122)
 * - Minimum 1 chiffre (48 à 57)
 * - Minimum 1 caractère spécial (Dépend des caractères pris en charges par le site):
 * - !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
 * - [33~47]: !"#$%&'()*+,-./
 * - [58~64]: :;<=>?@
 * - [91~96]: [\]^_`
 * - [123~126]: {|}~
 * keyword test: Mon 1er mot de passe! (21 char)
 *               M   o    n       1    e    r        m    o    t        d    e        p    a   s    s    e   !
 * ascii char : 77, 111, 110, 32, 49, 101, 114, 32, 109, 111, 116, 32, 100, 101, 32, 112, 97, 115 ,115 ,101, 33
 * somme ascii: 1800
 * Résultat attendu : "8IqkOMmoKQiSGUewCyA
 *
 * @param {string} keywords
 * @returns {string}
 */

// ---------------------------------- Main ----------------------------------

function encryptor(keywords) {
    let s_ASCII = 0;
    let placement = "";
    let char_exist = false;
    let crypted = "";
    let intervSpe = [[33, 47], [58, 64], [91, 96], [123, 126]];
    let intervNb = [48, 57];
    let intervMaj = [65, 90];
    let intervMin = [97, 122];

    //Somme ASCII de la phrase
    for (let i = 0; i < keywords.length; i++) {
        s_ASCII += keywords.charCodeAt(i);
    }
    console.log("s_ASCII: " + s_ASCII);

    //On définit les différents emplacements des char qui composeront le rendu
    for (let i = 0; i < keywords.length; i++) {
        console.log("i= " + i);
        //placement char_spe
        if (i === s_ASCII - HigherDividerASCII(s_ASCII, 30)) {
            placement += "@";
            console.log("Action = " + "char_spe");
        }
        //placement chiffre si different de char_spe
        else if (i === s_ASCII - HigherDividerASCII(s_ASCII, 10) && char_exist === false) {
            placement += "0";
            console.log("Action = " + "chiffre si different de char_spe");
        }
        //placement chiffre si egal à char_spe
        else if (i === s_ASCII - HigherDividerASCII(s_ASCII, 10) + 1 && char_exist) {
            placement += "0";
            console.log("Action = " + "chiffre si egal de char_spe");
        }
        //placement MAJUSCULE
        else {
            if (keywords.charCodeAt(i) + i % 2 === 0) {
                placement += "A";
                console.log("Action = " + "MAJUSCULE");
            }
            //placement minuscule
            else placement += "a";
            console.log("Action = " + "minuscule");
        }

    }

    /*
    for (let i = 0; i < keywords.length; i++) {
        if (keywords[i] !== " ") {
            if (keywords[i] === "Z" || keywords[i] === "z") crypted += String.fromCharCode(keywords.charCodeAt(i) - 25);
            else crypted += String.fromCharCode(keywords.charCodeAt(i) + 1);
        } else crypted += " ";
    }
    return crypted;
     */

    return placement;
}

console.log(parseInt(123.321));
console.log(HigherDividerASCII(1800, 26));
let p = "arc";
p[2] = "t";
console.log(p[2]);

console.log("Before encryptor: Mon 1er mot de passe!")
console.log("After  encryptor: " + encryptor("Mon 1er mot de passe!"));

// -------------------------------- Features --------------------------------

//Retourne le plus haut nombre divisant "dividende" par "divider"
function HigherDividerASCII(dividende, divider) {
    let result = 0;
    let dividendeInt = parseInt(dividende / divider);
    result = dividendeInt * divider;
    return result;
}

//module.exports = encryptor;