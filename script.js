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



const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

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

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}, 2500);



window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 3000 && scrollPosition <= 3180) {
        let valueDisplay = document.querySelectorAll(".num");
        let interval = 100;

        valueDisplay.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);

            let counter = setInterval(() => {
                startValue += 1;
                valueDisplay.textContent = startValue + "+";
                if (startValue == endValue || scrollPosition > 3426) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
});
