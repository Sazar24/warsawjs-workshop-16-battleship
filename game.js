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
    constructor() {
        super();        //"wywołanie konstruktora klasy parent"
        this._state = 'unknown';        // 'podkreślnik' = info dla programisty że to private;
        this._element = document.createElement('td');
        const self = this;
        this._element.addEventListener('click', () => {
            self.setState('miss');      // na funkcji strzałkowej działa z this.
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

class GameBoard extends GameCell {
    constructor() {
        super();

        const cellsInLine = 10;
        const cellsInColumn = 10;

        const gameElement = document.getElementById('game');
        const table = document.createElement('table');

        let row = document.createElement('tr');


        for (let i = 0; i < cellsInLine; i++) {
            row = document.createElement('tr');
            for (let jj = 0; jj < cellsInColumn; jj++) {
                const cell = new GameCell;
                row.appendChild(cell.getElement());
            }
            table.appendChild(row);
        }

        // for (let i = 1; i <= cellsInLine * cellsInColumn; i++) {
        //     const cell = new GameCell;
        //     row.appendChild(cell.getElement());
        //     if (i % cellsInLine === 0) {
        //         table.appendChild(row);
        //         row = document.createElement('tr');     // clear?
        //     }
        // }

        console.log(table);

        gameElement.appendChild(table);
        // this._element;
        // this.getElement();

    }
}


const gameBoard = new GameBoard;
// gameBoard;