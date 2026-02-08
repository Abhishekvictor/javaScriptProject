const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height === 0 || isNaN(height)){
        result.innerHTML = `Please enter the Height ${height}`;
    }
    else if (weight === '' || weight === 0 || isNaN(weight)){
        result.innerHTML = ` Please enter the Weight ${weight}`;
    }
    
       const bim = (weight / (height*height)*10000).toFixed(2)
        result.innerHTML =`<span>${bim}</span>`;

       if (bim <= 18.5){
        alert(`You are underweight ${bim}`)
       }
       else if (bim >=18.6 && bim <=24.9){ 
        alert(`Congratulations your weight is normal ${bim}` )
       }
    
       else if (bim >=25.0 && bim <=29.9){ 
        alert(`you are OverWeight ${bim}` )
       }

       else if (bim >=30.0 && bim <=34.9){ 
        alert(`you are OBESE ${bim}` )
       }

       else{
        alert(`Go to Doctor ${bim}`)
       }
    
})
