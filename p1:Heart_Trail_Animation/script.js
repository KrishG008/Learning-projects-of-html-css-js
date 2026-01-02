let bodyElement = document.querySelector("body");


bodyElement.addEventListener("mousemove",heartFunction)
    
function heartFunction(event){
    let positionx = event.offsetX;
    let positiony = event.offsetY;
    let newSpan = document.createElement("span");
    newSpan.style.left = positionx+"px";
    newSpan.style.top = positiony+"px";

    let sizeOfHeart=Math.random()*100;
    newSpan.style.height=sizeOfHeart+"px";
    newSpan.style.width=sizeOfHeart+"px";

    

    bodyElement.appendChild(newSpan);
    setTimeout(()=>{
        newSpan.remove();
    } ,3000)
}
