import {html, render} from 'https://unpkg.com/lit-html?module';

const dayOne = document.getElementById('day1');
const dayTwo = document.getElementById('day2');
const dayThree = document.getElementById('day3');
const dayFour = document.getElementById('day4');

dayOne.addEventListener('click', dayOneFunc);
dayTwo.addEventListener('click', dayTwoFunc);
dayThree.addEventListener('click', dayThreeFunc);
dayFour.addEventListener('click', dayFourFunc);


// html `<p>Welcome to day one!</p>`;


function dayOneFunc() {
    
    console.log('Day One Training Starts Now!');
    const dayOneInfo = document.createElement('p');
    dayOneInfo.innerHTML = 'Welcome to day one!';
    dayOne.appendChild(dayOneInfo);
    document.getElementById('day2').remove();
    document.getElementById('day3').remove();
    document.getElementById('day4').remove();

    

    const backButton = document.createElement('button'); 
    backButton.innerHTML = 'BACK';
    backButton.addEventListener('onclick', () => location.href = "http://127.0.0.1:5500/muscle.html");
    dayOneInfo.appendChild(backButton);
}

function dayTwoFunc() {
    console.log('Day Two Training Starts Now!');
}

function dayThreeFunc() {
    console.log('Day Three Training Starts Now!');
}

function dayFourFunc() {
    console.log('Day Four Training Starts Now!');
}


