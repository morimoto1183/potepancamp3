let result = document.getElementById("result")
let multiplication=document.getElementById("multiplication")
let divide=document.getElementById("divide")
let minus=document.getElementById("minus")
let plus=document.getElementById("plus")


function clickbutton(target){

       let target_value = target.innerHTML;
       
  if (target_value == "AC"){
      result.innerHTML = "0";
  } else if (target_value == "="){
      result.innerHTML = eval(result.innerHTML);
  } else {
      if(result.innerHTML == "0"){
          result.innerHTML = target_value;
      } else{
          result.innerHTML += target_value;
      }
   }
   
  if (result.innerHTML.slice(-1) == "+"){
      multiplication.disabled = true;
      divide.disabled = true;
      minus.disabled = true;
      plus.disabled = true;
  } else if (result.innerHTML.slice(-1) == "-"){
      multiplication.disabled = true;
      divide.disabled = true;
      minus.disabled = true;
      plus.disabled = true;
  } else if (result.innerHTML.slice(-1) == "*"){
      multiplication.disabled = true;
      divide.disabled = true;
      minus.disabled = true;
      plus.disabled = true;
  } else if (result.innerHTML.slice(-1) == "/"){
      multiplication.disabled = true;
      divide.disabled = true;
      minus.disabled = true;
      plus.disabled = true;
  } else{
      multiplication.disabled = false;
      divide.disabled = false;
      minus.disabled = false;
      plus.disabled = false;
  }
 
}
