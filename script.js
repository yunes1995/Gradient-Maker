const $ = document;
const firstColorInput = $.querySelector('#color-a');
const secondColorInput = $.querySelector('#color-b');
const directions = $.querySelectorAll('.buttons button');
const generateBtn = $.querySelector('#submit');
const codeTextArea = $.querySelector('#code');
const copyBtn = $.querySelector('#copy');
const body = $.querySelector('body');
let dirGradient = "to bottom";

function setDirection(dir, dirElm) {
    directions.forEach(items => {
        items.classList.remove("active");
    })

    if (dirElm.tagName === 'BUTTON') {
        dirElm.classList.add("active");
    } else {
        dirElm.parentNode.classList.add("active");
    }
    dirGradient = dir;
}

directions.forEach(direction => {
    direction.addEventListener('click', (event) => {
        let dir = event.target.dataset.direction;
        setDirection(dir, event.target)
    })
})

function firstGradient() {
    let code = `background: linear-gradient(${dirGradient}, ${firstColorInput.value}, ${secondColorInput.value})`
    codeTextArea.textContent = code;
    document.body.style.cssText = code;
}

generateBtn.addEventListener('click', firstGradient);

copyBtn.addEventListener("click", () => {
    codeTextArea.select();
    navigator.clipboard.writeText(codeTextArea.value);
    alert("Copied the text: " + codeTextArea.value);
})

firstGradient();