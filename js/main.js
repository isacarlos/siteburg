$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

function openFullimg(src) {
    document.getElementById("fullimg").src = src;
    document.getElementById("fullimgBox").style.display = "block";
}

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("fullimgBox").style.display = "none";
});

window.addEventListener("resize", function() {
    resizeImage();
});

function resizeImage() {
    var img = document.getElementById("fullimg");
    var wrapper = document.getElementById("fullimgWrapper");
    var imgRatio = img.naturalWidth / img.naturalHeight;
    var wrapperRatio = wrapper.clientWidth / wrapper.clientHeight;

    if (imgRatio > wrapperRatio) {
        img.style.width = "100%";
        img.style.height = "auto";
    } else {
        img.style.width = "auto";
        img.style.height = "100%";
    }
}

document.getElementById("fullimg").addEventListener("load", function() {
    resizeImage();
});


document.querySelector(".prev-image").addEventListener("click", function() {
    navigateImage(-1);
});

document.querySelector(".next-image").addEventListener("click", function() {
    navigateImage(1);
});

function navigateImage(direction) {
    var currentImgIndex = imageSources.indexOf(document.getElementById("fullimg").src);
    var newIndex = currentImgIndex + direction;

    if (newIndex < 0) {
        newIndex = imageSources.length - 1;
    } else if (newIndex >= imageSources.length) {
        newIndex = 0;
    }

    document.getElementById("fullimg").src = imageSources[newIndex];
}

var imageSources = []; // Adicione o array de URLs das imagens aqui

function openFullimg(src) {
    document.getElementById("fullimg").src = src;
    document.getElementById("fullimgBox").style.display = "block";
}

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("fullimgBox").style.display = "none";
});

window.addEventListener("resize", function() {
    resizeImage();
});

function resizeImage() {
    var img = document.getElementById("fullimg");
    var wrapper = document.getElementById("fullimgWrapper");
    var imgRatio = img.naturalWidth / img.naturalHeight;
    var wrapperRatio = wrapper.clientWidth / wrapper.clientHeight;

    if (imgRatio > wrapperRatio) {
        img.style.width = "100%";
        img.style.height = "auto";
    } else {
        img.style.width = "auto";
        img.style.height = "100%";
    }
}

document.getElementById("fullimg").addEventListener("load", function() {
    resizeImage();
});

