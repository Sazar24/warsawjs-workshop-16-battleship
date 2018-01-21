class ViewComponent {
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



const gameElement = document.getElementById('game');
const row = document.createElement('tr');
gameElement.appendChild(row);

const cell1 = new GameCell;

row.appendChild(cell1.getElement());