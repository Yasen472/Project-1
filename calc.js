let heightField = document.getElementsByClassName('height-field')[0];
let weightField = document.getElementsByClassName('weight-field')[0];

const submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener('click', calcRes);

function calcRes() {
    let heightUser = Number(document.getElementsByClassName('height-field')[0].value);
    let weightUser = Number(document.getElementsByClassName('weight-field')[0].value);
    let heightUserM = heightUser / 100;

    // BMI formula - person's weight in kilograms divided by the square of height in meters
    let result = weightUser / Math.pow(heightUserM, 2);
    console.log(result.toFixed(1));

    document.getElementsByClassName('height-field')[0].value = '';
    document.getElementsByClassName('weight-field')[0].value = '';
}

