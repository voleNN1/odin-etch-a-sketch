function createGrid(squares) {
    const container = document.querySelector("div");
    for (i = 0; i < squares; i++) {
       const div = document.createElement("div");
       div.classList.add("squares");
       container.appendChild(div);
    }
}

createGrid(256);

const divs = document.querySelectorAll(".squares");

divs.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = "slategrey";
    })

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "darkslategrey";
    })
})


