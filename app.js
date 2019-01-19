let nums =[];

let operation = {
  add:false,
  subtract:false,
  multiply:false,
  divide:false
}
const screen = document.querySelector(".calculator__screen");
document.body.addEventListener("keypress",(evt)=>{
  const buttons = document.querySelectorAll("button");
  buttons.forEach( button =>{
    
    // check if key press is same as calculator
    if(evt.key === button.textContent){
      const regex = /\D/gm; //remove anythind thats not a digit
      screen.textContent += evt.key.replace(regex,"");
      // get all operators
      const operators = document.querySelectorAll(".calculator__button--operator");
      operators.forEach( operator =>{
        // if the its a math operator save the previous vale and clear screen
        if( operator.textContent === evt.key && operator.textContent !== "=" && screen.textContent !== ""){
          operate(operator,screen,nums); 
        } 
        
      })
      if(evt.code === "Equal"){
        let value = parseInt(screen.textContent) // converts string into Integar
        if(nums.length === 1){
          nums.push(value);
          orderOfOperations(nums,screen);
        }
      }
    }
  })
})

function calculate(arr){
  if(operation.add){
   return total = arr.reduce( (curr,prev) => [curr + prev])
   ;
  } else if ( operation.subtract){
    return total = arr.reduce( (curr,prev) => [curr - prev]);
  } else if ( operation.multiply){
    return total = arr.reduce( (curr,prev) => [curr * prev]);
  } else if ( operation.divide){
    return total = arr.reduce( (curr,prev) => [curr / prev]);
  }
}
function clear(){
  return document.querySelector(".calculator__screen").textContent="";
}
function orderOfOperations(arr,screen){
  // if flag value is true then runs operations
  // ideally wants to do first inputted operator 
  for(let ops in operation){
    if(!operation[ops]){
      return;
    } else {
      if(arr.length === 2){
        screen.textContent =  calculate(arr);
        operation[ops] = false; // resets flag
        for(let i = arr.length; i > 0; i-- ){ // resest array 
          arr.pop();
        } 
      } 
    }
  }
}
function operate(operator,screen,arr){
  let value = parseInt(screen.textContent) // converts string into Integar

  // can be altered may not be fully functional
  // checks to see what the operator text content is and changes flag value 
  switch (operator.textContent) {
    case "+":
      operation.add = true;
      arr.push(value);
      clear();
      orderOfOperations(arr,screen);
      console.log(arr);
      break;
    case "-":
      operation.subtract = true;
      arr.push(value);
      clear();
      orderOfOperations(arr,screen);
      console.log(arr);
      break;
    case "*":
      operation.multiply = true;
      arr.push(value);
      clear();
      orderOfOperations(arr,screen);
      console.log(arr);
      break;
    case "/":
      operation.divide = true;
      arr.push(value);
      clear();
      orderOfOperations(arr,screen);
      console.log(arr);
      break;
  }
}
// need click evt incase user clicks instead of keypress
// and need to style both keypress and click for the ui to indicate user input