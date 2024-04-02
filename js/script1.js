AOS.init();

script
var fullimgBox = document.getElementById("fullimgBox");
var fullimg = document.getElementById("fullimg");

function openFullimg(pic){
    fullimgBox.style.display = "flex";
    fullimg.src = pic;
}

function closeFullimg(){
    fullimgBox.style.display = "none";
}



