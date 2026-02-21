const image = ["Img/img1.jpg",
     "Img/img2.jpg",
     "Img/img3.jpg",
     "Img/img4.jpg",
     "Img/img5.jpg",
     "Img/img6.jpg",
     "Img/img7.jpg",
     "Img/img8.png",
     "Img/img9.jpg",
     "Img/img10.png",
     "Img/img11.jpg",
     "Img/img12.jpg",
     "Img/img13.jpg",

]
let index = 0;
let intervalId ;

const startChaning = function(){

     intervalId =setInterval(function(){
        document.getElementById('imgChanging').src =image[index];
        index++;
        if(index >= image.length){
            index = 0;
        }
    },1000)
}

const stopChaning = function(){
    clearInterval(intervalId)
    intervalId = null;
    
    
}

const reset = function(){
    index = 0;
    document.getElementById('imgChanging').src = image[0]
    
}

document.getElementById('start').addEventListener('click', startChaning)
document.querySelector('#stop').addEventListener('click', stopChaning)
document.querySelector('#reset').addEventListener('click', reset)
