function numberPattern(){
  let y = "";
  
  for (let x = 5; x >= 1; x--){
      y += x;
      console.log (y);
  }
}
numberPattern();

function numberPattern(){
  let y = "";
  
  for (let x = 1; x <= 5; x++){
      y+=x;
      console.log (y);
  }
}
numberPattern()


//
function displayEvenNumbers(){
  for (let x = 13; x <= 50; x++){
    if (x  % 2 == 0){
      console.log (x);
    }
  }
}

function displayEvenNumbers(){
for(let x = 0; x<= 100; x++){
    if(x % 2 == 0){
        console.log(x);
        }
    }
}
displayEvenNumbers();


function displayPattern (){
    y = ""
    for(let x = 1; x <= 4; x++){
      
        y +=x;
        console.log(y);
    }
}
displayPattern()

function samePattern(){
    let n = 4;
let z = "";
for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= x; y++) {
    z += x;
  }
  z += "\n";
}
console.log(z);
}
samePattern()

