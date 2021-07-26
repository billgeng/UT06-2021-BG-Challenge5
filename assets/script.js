var timerCurrent = moment().format("dddd, MMMM Do ,YYYY");
var timer = document.querySelector('#timer');
timer.innerText = timerCurrent;

const schedulerText9Input = document.querySelector('#text-9');
const text = [];
const submitButton = document.querySelector('#submitBtn');
const storedInput = localStorage.getItem('scheduleinput');


schedulerText9Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})


const saveToLocalStorage = () => {
    localStorage.setItem('scheduleinput', text.textContent);
}

submitButton.addEventListener('click',saveToLocalStorage);

document.getElementById('#text-9').innerHTML = storedInput;


console.log(storedInput);


  





var schedulerText10Input = document.querySelector('#text-10');
var schedulerText11Input = document.querySelector('#text-11');
var schedulerText12Input = document.querySelector('#text-12');
var schedulerText13Input = document.querySelector('#text-13');
var schedulerText14Input = document.querySelector('#text-14');
var schedulerText15Input = document.querySelector('#text-15');
var schedulerText16Input = document.querySelector('#text-16');
var schedulerText17Input = document.querySelector('#text-17');



