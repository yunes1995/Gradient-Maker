const $ = document;
const firstColorInput = $.querySelector('#color-a');
const secondColorInput = $.querySelector('#color-b');
const directions = $.querySelectorAll('.buttons button');
const generateBtn = $.querySelector('#submit');
const codeTextArea = $.querySelector('#code');
const copyBtn = $.querySelector('#copy');


function setDirection(dir, dirElm) {
    directions.forEach(items => {
        items.classList.remove("active");
    })


    if (dirElm.tagName === 'BUTTON') {
        dirElm.classList.add("active");
    } else {
        dirElm.parentNode.classList.add("active");
    }


    console.log(dir, dirElm);
}

directions.forEach(direction => {
    direction.addEventListener('click', (event) => {
        let dir = event.target.dataset.direction;

        setDirection(dir, event.target)
    })
})

