let ARNm = document.getElementById('inputARNm');
let btn = document.getElementById('click');
const regex = new RegExp('[A|U|C|G]{3}');


console.table()

if (btn != null) {
    btn.addEventListener('click', () => onClick(ARNm), false);
}

function onClick(ARNm) {
    let value = ARNm.value;
    if (regex.test(value)) {
        console.log(true);
    } else {
        console.log(false);
        return;
    }
    if (canBeSlice(value)) {
        slicer3(value);
    }
}

function canBeSlice(value) {
    let bool = true;
    if (value.length % 3 != 0) {
        alert("ne peut pas être slicer");
        bool = false;
    }
    return bool;
}

function slicer3(value) {

    /**
     * @params String: value
     * @return Array: triplet
     * 
     * découpe la variable value en tableau de 3 caractères 
     * pour les stocker dans un tableau nommé triplet et 
     * le retourner
     * 
    **/

    console.log(value);
    let loop = value.length / 3
    let triplet = [];
    let temp = [];
    for (let i = 1; i <= loop*3; i++) {
        temp.push(value[i - 1])
        if (i % 3 == 0 && i != 1) {
            triplet.push(temp);
            temp = [];
        }
    }
    console.log(triplet);
}

function decode(triplet) {
    
}




const dCode = {
    "UUU": "phénylalanine",
    "UUC": "phénylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",

    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",

    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UAA": "STOP",
    "UAG": "STOP",

    "UGU": "Cystéine",
    "UGC": "Cystéine",
    "UGA": "STOP",
    "UGG": "Tryptophane",

    "CUU": "Leucine",
    "CUC": "Leucine",
    "CUA": "Leucine",
    "CUG": "Leucine",

    "CCU": "Proline",
    "CCC": "Proline",
    "CCA": "Proline",
    "CCG": "Proline",

    "CAU": "Histidine",
    "CAC": "Histidine",
    "CAA": "Glutamine",
    "CAG": "Glutamine",

    "CGU": "Arginine",
    "CGC": "Arginine",
    "CGA": "Arginine",
    "CGG": "Arginine",

    "AUU": "Isoleucine",
    "AUC": "Isoleucine",
    "AUA": "Isoleucine",
    "AUG": "Méthionine",

    "ACU": "Thréonine",
    "ACC": "Thréonine",
    "ACA": "Thréonine",
    "ACG": "Thréonine",

    "AAU": "Asparagine",
    "AAC": "Asparagine",
    "AAA": "Lysine",
    "AAG": "Lysine",

    "AGU": "Serine",
    "AGC": "Serine",
    "AGA": "Arginine",
    "AGG": "Arginine",

    "GUU": "Valine",
    "GUC": "Valine",
    "GUA": "Valine",
    "GUG": "Valine",

    "GCU": "Alanine",
    "GCC": "Alanine",
    "GCA": "Alanine",
    "GCG": "Alanine",

    "GAU": "Aspartate",
    "GAC": "Aspartate",
    "GAA": "Glutamate",
    "GAG": "Glutamate",

    "GGU": "Glycine",
    "GGC": "Glycine",
    "GGA": "Glycine",
    "GGG": "Glycine"
}