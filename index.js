const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  result = document.querySelector("#results")
  console.log(height);

  if (height ===0|| height < 0 || isNaN(height)){
    result.innerHTML=`Please enter valid height ${height}`
  }
  else if (weight ===0||weight<0|| isNaN(weight)){
    result.innerHTML=`Please enter valid height ${weight}`
  }
  else{
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let health;
    if(bmi<18.6){
      health="Under Weight"
    }
    else if(bmi>=18.6 && bmi<=24.9){
      health="Normal Range"
    }
    else if(bmi>24.9){
      health="Overweight"
    }

  
    result.innerHTML=`<span>${bmi}</span> You are ${health}`
  }
  





})