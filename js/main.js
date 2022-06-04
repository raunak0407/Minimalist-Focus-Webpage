const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name1 = document.getElementById('name');
const focus = document.getElementById('focus');

const showTime = () => {
    let today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`

    setTimeout(showTime, 1000);
}

//add zero
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

const setBgGreet = () => {
    let today = new Date();
    hour = today.getHours();

    if(hour < 12 ){
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else{
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}


const getName = () => {
    if(localStorage.getItem('name') === null){
        name1.textContent = '[Enter Name]';
    }else {
        name1.textContent = localStorage.getItem('name');
    }
}

const setName = (e) => {
    if(e.type === 'keypress') {
        if(e.keyCode === 13){
            localStorage.setItem('name', e.target.innerText);
            name1.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

const getFocus = () => {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

const setFocus = (e) => {
    if(e.type === 'keypress') {
        if(e.keyCode === 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}



name1.addEventListener('keypress', setName);
name1.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
setBgGreet();
getName();
getFocus();