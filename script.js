// menubar
let menuBar = document.getElementById('menuBar');
let close = document.getElementById('close');
let ul = document.getElementById('ul');

menuBar.addEventListener('click',()=>{
    ul.style.display = "block";
});

function closeMenu(){
    ul.style.display = "none";
}

close.addEventListener('click',()=>{
    ul.style.display = "none";
    location.reload();
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 425) {
        console.log("hidden");
        ul.style.display = "none";
    } else {
        console.log("show");
    }
});


// image slider
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('leftBtn');
const next = document.getElementById('rightBtn');

let currentIndex = 0;

slides.forEach((slide,index)=>{
    slide.style.transform = `translateX(${index * 100}%)`;
});

function updateSlide(){
    slides.forEach((slide,index)=>{
        const offset = (index - currentIndex) * 100;
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function startInterval() {
    intervalID = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    }, 1500);
}

function stopInterval() {
    clearInterval(intervalID);
}

prev.addEventListener("click",()=>{
    stopInterval();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
    startInterval();
});

next.addEventListener("click",()=>{
    stopInterval(); // Stop interval when next button clicked
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
    setTimeout(startInterval, 5000);
});


startInterval();
