const form=document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault()

    const weight=parseInt(document.querySelector("#weight").value)
    
    
    const height=parseInt(document.querySelector("#height").value)
    const result=(document.querySelector(".result"))

    if(height==='' || height<0 || isNaN(height)   ){
        result.innerHTML=`Please give Valid Height ${height}`
    }

    else if(weight==='' || weight<0 || isNaN(weight)   ){
        result.innerHTML=`Please give Valid Weight ${weight}`
    }
    else{

    const bmi=(weight/((height*height)/10000)).toFixed(2)
    console.log(bmi);
    
    if (bmi<18.6){
        result.innerHTML=`<h3>The BMI is ${bmi} <br></br> UnderWeight`
    

    }

   

    else if (bmi>=18.6 && bmi<24.9){
        result.innerHTML=`<h3>The BMI is ${bmi} <br></br> Normal Range`
    }

    else if (bmi>=24.9){
        result.innerHTML=`<h3>The BMI is ${bmi} <br></br> Over Weight`
    }
}



})

