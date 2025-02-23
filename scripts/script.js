const container = document.querySelector(".container");

function createGrid(squares) {
    squares = squares * squares;
    for (i = 0; i < squares; i++) {
       const div = document.createElement("div");
       div.classList.add("squares");
       container.appendChild(div);
    }
};

createGrid(16);
const divs = document.querySelectorAll(".squares");

divs.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add("hover");
    })
    
    element.addEventListener('mouseout', () => {
        element.classList.remove("hover");
    })
});

const newSketch = document.querySelector("#new-sketch");

newSketch.addEventListener("click", () => {
    let squaresPerSide = prompt("Please enter the amount of Squares per Side you would like! (Limit 100)");

    if (squaresPerSide == 0 || squaresPerSide > 100) {
        alert("Please press the button again and enter a valid number!");
    }
    if (squaresPerSide > 0 && squaresPerSide <= 100) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(squaresPerSide);
        const newDivs = document.querySelectorAll(".squares");
        newDivs.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add("hover");
            })
            
            element.addEventListener('mouseout', () => {
                element.classList.remove("hover");
            })
        });
    }
});