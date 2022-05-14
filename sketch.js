const container = document.querySelector('#container');

function drawGrid(n = 16) {
    let arr = Array.from(Array(n * n).keys());

    arr.forEach(e => {
        const div = document.createElement('div');
        div.classList.add('card')

        container.appendChild(div);
    })
}

/* Draw the grid with default 16 x 16 dimension */
drawGrid();

/* Draw new grid based on user input */
const request = document.querySelector('#request');

request.addEventListener('click', e => {
    const input = parseInt(prompt('Please select number of Square, limit of 100'));

    if (input > 100) {
        alert('Please select maximum 100 Squares !!')
    }
    else {
        /* clear the default grid boxes */
        container.innerHTML = '';
        /* update grid columns with based on user input */
        container.setAttribute('style', `grid-template-columns: repeat(${input}, 15px)`)
        drawGrid(input)

        const cards = document.querySelectorAll('.card');

        cards.forEach(card => card.addEventListener('mouseover', e => {

            const r = Math.floor(Math.random() * 255)
            const g = Math.floor(Math.random() * 255)
            const b = Math.floor(Math.random() * 255)

            e.target.setAttribute('style', `background-color: rgba(${r}, ${g}, ${b}, 0.3);`);

        }))
    }
})

/* Reset to default grid of 16 x 16 dimension */
const reset = document.querySelector('#reset');

reset.addEventListener('click', e => {
    container.innerHTML = '';
    container.setAttribute('style', 'grid-template-columns: repeat(16, 15px)');
    drawGrid();
})