const hours   	 = document.querySelector('#hours');
const days    	 = document.querySelector('#days');
const minutes 	 = document.querySelector('#minutes');
const seconds 	 = document.querySelector('#seconds');
const countdown  = document.querySelector('#countdown');
const year 		 = document.querySelector('#year');
const loading    = document.querySelector('#loading');
const datePicker = document.querySelector('#datePanel');

function updateCountdown() {
    // Количество секунд прошедших с 1970 года
    var now = Date.parse(new Date());

    // Количество секунд которое пройдет до даты дня рождения
    var birthday = Date.parse(datePicker.value);

    // diff = количество секунд которое пройдет с 1970 года до дня рождения - количество секунд прошедшее с 1970 до текущего момента
    const diff = birthday - now;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    days.innerHTML    = d;
    hours.innerHTML   = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

document.querySelector('#set').addEventListener("click", function () {
    // Show spinner before countdown
    setTimeout(() => {
            document.querySelector('#birh-container').style.display = 'none';
            countdown.style.display = 'flex';
    }, 1000);

    // Run every second
    setInterval(updateCountdown, 1000);
});