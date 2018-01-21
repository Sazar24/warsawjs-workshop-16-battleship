class ViewComponent {
    constructor() {
        if (new.target === ViewComponent)       //ES6 only
            throw new Erro("abstract class");
    }

    getElement() {
        return this._element;
    }
}

class GameCell extends ViewComponent {
    constructor(handleCellClick, rows, columns) {
        super();        //"wywołanie konstruktora klasy parent"
        this._state = 'unknown';        // 'podkreślnik' = info dla programisty że to private;
        this._element = document.createElement('td');
        const self = this;
        
        this._element.addEventListener('click', () => {
            handleCellClick(rows, columns)
        })
    }

    setState(state) {
        if (state !== 'unknown' && state !== 'miss' && state !== 'hit') {
            throw new Error('Invalid state');
        }
        this._state = state;
        this._element.className = "cell_" + state;
    }

}

class GameBoard extends ViewComponent {
    constructor(handleCellClick) {
        super();

        const columns = 10;
        const rows = 10;

        const gameElement = document.getElementById('game');
        const table = document.createElement('table');
        let row = document.createElement('tr');

        this._cells = {};

        for (let i = 0; i < columns; i++) {
            row = document.createElement('tr');
            for (let jj = 0; jj < rows; jj++) {
                const cell = new GameCell(handleCellClick, i, jj);
                const coordinatesText = `${i}x${jj}`;
                this._cells[coordinatesText] = cell;

                row.appendChild(cell.getElement());
            }
            table.appendChild(row);
        }

        gameElement.appendChild(table);
    }

    setStateAt(rows, columns, state) {
        const coordinatesText = `${rows}x${columns}`;
        this._cells[coordinatesText].setState(state);
    }
}

class GameController {
    constructor(boardView) {
        this._boardView = boardView;
    }

    handleCellClick(rows, columns) {
        board.setStateAt(rows, columns, 'miss');
    }
}

// const gameBoard = new GameBoard();
// let board;
let controller;

function handleCellClick(rows, columns) {
    controller.handleCellClick(rows, columns);
}

let board = new GameBoard(handleCellClick);
controller = new GameController(board);


for (let i = 0; i < 10; i++) {
    board.setStateAt(i, i, 'miss');
    
}

// gameBoard.setStateAt(3, 3, 'miss');
// gameBoard.setStateAt(4, 4, 'miss');
// gameBoard.setStateAt(5, 5, 'miss');