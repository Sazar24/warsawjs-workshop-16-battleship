const gameElement = document.getElementById('game');
const row = document.createElement('tr');
const cell1 = document.createElement('td');
const cell2 = document.createElement('td');

row.appendChild(cell1);
row.appendChild(cell2);
gameElement.appendChild(row);


const cells = [cell1, cell2];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
        event.target.classList.add('clicked');
    });
}

// cells.forEach((elem) => {
//     console.log(elem);

//     elem.addEventListener('click', function (event) {
//         event.target.classList.add('clicked');
//     });




// cell1.addEventListener('click', function (event) {
//     event.target.classList.add('clicked');
// })

// cell2.addEventListener('click', function (event) {
//     event.target.classList.add('clicked');
// })