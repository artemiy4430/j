const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');



let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%) `
}
function goToSlide(index){
    currentIndex = index;
    showSlide(currentIndex)
    activeDots()
}
function goToNextSlide() {
    currentIndex = (currentIndex +1) % slides.length;
    showSlide(currentIndex)
}
function goToPrevSlide() {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex)
}
function activeDots() {
    dots.forEach((dot, index) => {
     if(index === currentIndex) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    } )
}
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index)
    })
})
showSlide(currentIndex);
activeDots()
