// Search Input
let backColorInput = document.getElementById('searchInput1');
let backColorButton = document.getElementById('searchButton1');

backColorInput.addEventListener('focus', function () {
    backColorButton.style.backgroundColor = "#ff6600";
});
backColorInput.addEventListener('blur', function () {
    backColorButton.style.backgroundColor = "";
});

// First Slider

var swiper = new Swiper(".mySwiper", {

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Second Slider

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 8,
    slidesPerGroup: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Third Slider

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    slidesPerGroup: 3,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
});