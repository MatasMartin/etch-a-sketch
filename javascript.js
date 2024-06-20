document.addEventListener("DOMContentLoaded", function() {
    
    let want = 100;
    
    const container = document.getElementById("container");  

    for(let i = 0;i<(want*want);i++){
        let box = document.createElement("DIV");
        container.appendChild(box);
        box.classList.add("square");

        let aukstis;
        aukstis = 800 / want;
        box.style.height=aukstis + "px";
        box.style.width=aukstis + "px";
    }
    
    

})
