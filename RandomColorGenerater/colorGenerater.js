const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]

    }
    return color;
}

let intervalId;
// console.log(randomcolor())
const startChaningColor = function(){
     intervalId = setInterval( changeBgColor,2000);
    function changeBgColor(){

        document.body.style.backgroundColor = randomcolor();
    };
    }

const stopChaningcolor =function(){

    clearInterval(intervalId)
    intervalId = null;

}



document.querySelector('#start').addEventListener('click', startChaningColor)
document.querySelector('#stop').addEventListener('click', stopChaningcolor)
