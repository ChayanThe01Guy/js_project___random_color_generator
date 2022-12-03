const containerEl = document.querySelector(".container");

for(let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color_container");
    containerEl.appendChild(colorContainerEl);
}

const color_container = containerEl.querySelectorAll(".color_container");

colorGenerate ();
function colorGenerate () {
    color_container.forEach ((color_container) => {
        const newColor = randomNumberGenerate();
        color_container.style.backgroundColor = "#" + newColor;
        color_container.innerText = "#" + newColor;
    });
}

function randomNumberGenerate () {
    const colorCodeTg = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorTg = "";

    for(let i = 0; i < colorCodeLength; i++) {
        const randomNumber = Math.floor(Math.random() * colorCodeTg.length);
        colorTg += colorCodeTg.substring(randomNumber, randomNumber + 1);
    }
    return colorTg;
}

color_container.forEach ((colorContainer) => {
    colorContainer.addEventListener("click", () => {
        navigator.clipboard.writeText(colorContainer.innerText);
        alert(`${colorContainer.innerText} Copied`);
    })
});