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

const schedulerText10Input = document.querySelector('#text-10');


schedulerText10Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})




submitButton.addEventListener('click',saveToLocalStorage);

document.getElementById('#text-10').innerHTML = storedInput; 


const schedulerText11Input = document.querySelector('#text-11');


schedulerText11Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})




submitButton.addEventListener('click',saveToLocalStorage);

document.getElementById('#text-11').innerHTML = storedInput; 

const schedulerText12Input = document.querySelector('#text-12');

schedulerText12Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})


submitButton.addEventListener('click',saveToLocalStorage);
document.getElementById('#text-12').innerHTML = storedInput; 

const schedulerText13Input = document.querySelector('#text-13');

schedulerText13Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})




submitButton.addEventListener('click',saveToLocalStorage);
document.getElementById('#text-13').innerHTML = storedInput; 

const schedulerText14Input = document.querySelector('#text-14');


schedulerText14Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})




submitButton.addEventListener('click',saveToLocalStorage);
document.getElementById('#text-14').innerHTML = storedInput; 

const schedulerText15Input = document.querySelector('#text-15');


schedulerText15Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})



submitButton.addEventListener('click',saveToLocalStorage);
document.getElementById('#text-15').innerHTML = storedInput; 

const schedulerText16Input = document.querySelector('#text-16');

schedulerText16Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})


submitButton.addEventListener('click',saveToLocalStorage);
document.getElementById('#text-16').innerHTML = storedInput; 

const schedulerText17Input = document.querySelector('#text-17');

schedulerText17Input.addEventListener('input',schedule => {
    text.textContent = schedule.target.value;
    
})


submitButton.addEventListener('click',saveToLocalStorage);

document.getElementById('#text-17').innerHTML = storedInput; 

