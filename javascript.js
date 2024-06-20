let userGrid = 1;

document.addEventListener("DOMContentLoaded", function() {
    
    let want = 0;
    
    const container = document.getElementById("container");  

    for(let i = 0;i<(want*want);i++){
        let box = document.createElement("DIV");
        container.appendChild(box);
        box.classList.add("square");

        let aukstis;
        aukstis = 800 / want;
        box.style.height=aukstis + "px";
        box.style.width=aukstis + "px";
    
        box.addEventListener("mouseover", (event) => {
            // box.style.backgroundColor = "rgb(11, 15, 28)";
            box.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 10) + ", " + Math.floor(Math.random() * 10) + ", " + Math.floor(Math.random() * 10) + ")";
        });

    }
    
    const aButton = document.querySelector("#buttonAlert");
    
    aButton.addEventListener("click", buttonFunction);


   




})

function buttonFunction() {
    const aButton = document.querySelector("#buttonAlert");
    const btn = document.querySelector("#button");
    

    aButton.classList.add("move");

    setTimeout(function(){
        aButton.classList.add("moved");
    }, 1600);

    setTimeout(function(){
        alertFunction(userGrid)
    }, 200);

    btn.disabled = true;

}

function alertFunction(userGrid){
    
    let gridInput;
    let picked = false;
    const btn = document.querySelector("#button");

    const container = document.getElementById("container");  

    container.style.pointerEvents = "none";

    while(picked == false){

        
        gridInput = window.prompt("Set grid size: (1-100)");
        

        if(!isNaN(gridInput) && gridInput >= 1 && gridInput <= 100){
            console.log("your number - " + gridInput);
            picked = true;
            userGrid = gridInput;
            createGrid(userGrid);
            btn.disabled = false;
        }else {
            console.log("Please pick a viable number!");
        }    
    }

}

function createGrid(userGrid) {
    console.log("creating grid");
    let want = userGrid;
    
    const container = document.getElementById("container");  

    container.style.pointerEvents = "all";

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }


    for(let i = 0;i<(want*want);i++){
        let box = document.createElement("DIV");
        container.appendChild(box);
        box.classList.add("square");

        let aukstis;
        aukstis = 800 / want;
        box.style.height=aukstis + "px";
        box.style.width=aukstis + "px";
    
        box.addEventListener("mouseover", (event) => {
            //box.style.backgroundColor = "rgb(11, 15, 28)";
            box.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
        });
    }
}