let boxElement = document.querySelector(".box");

const careers =["Student","Coder","Teacher","Web developer","IITAN"];
let careerIndex = 0;
let charecterIndex = 0;

updateText();

function updateText(){
    
    charecterIndex++;
    
    boxElement.innerHTML =   `<h1>I am a ${careers[careerIndex].slice(0,charecterIndex)} </h1>`;
    
    if (charecterIndex == careers[careerIndex].length){
        careerIndex++;
        charecterIndex = 0;
    }
    if(careerIndex == careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400)



}

