var ARNm = document.getElementById('inputARNm');
var btn = document.getElementById('click');
const regex = new RegExp('[A|U|C|G]{3}');

if (btn != null) {
    btn.addEventListener('click', () => onClick(ARNm), false);
}

function onClick(ARNm) {
    var value = ARNm.value;

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
    var bool = true;
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
    var loop = value.length / 3
    var iteration = 0;
    var triplet = [];
    var temp = [];
    for (let i = 1; i <= loop*3; i++) {

        temp.push(value[iteration + i - 1])

        
        if (i % 3 == 0 && i != 1) {
            // console.log(temp);
            iteration++;
            triplet.push(temp);
            temp = [];
        }

        
    }
    console.log(triplet);

}




