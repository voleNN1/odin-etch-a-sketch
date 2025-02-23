function createGrid(squares) {
    const container = document.querySelector("div");
    for (i = 0; i < squares; i++) {
       const div = document.createElement("div");
       div.classList.add("squares");
       container.appendChild(div);
    }
}

createGrid(256);

const div = document.querySelector(".squares");
div.addEventListener('mouseover', () => {
    div.style.backgroundColor = "slategrey";
});
