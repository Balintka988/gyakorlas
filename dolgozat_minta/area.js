class Area{
    #div;
    #container;

    constructor(className) {
        this.#container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        this.#container.appendChild(this.#div);
    }

    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = "container";
            document.body.appendChild(container);
        }
        return container;
    }
    get div() {
        return this.#div;
    }
    get container(){
        return this.#container;
    }
}

class Table extends Area{
    #table
    #thead

    constructor(){
        super("table");
        
        this.#table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
        this.div.appendChild(this.#table);

        this.#thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
        this.#table.appendChild(this.#thead);

        this.generateFejlec();
    }

    generateFejlec(){ //fejlec legeneralasa
        const headerRow = document.createElement('tr'); //a fejlécnek létrehozok egy sort
        this.#thead.appendChild(headerRow); //thead elemhez hozzáadom az új sorunkat
    
        const header = ["Név", "számjegyek száma", "Század"];

        for (const elem of header) { //a header tömböt for of-al járom be
            const headerCell = document.createElement('th'); //létrehozok egy uj cellat 
            headerCell.innerHTML = elem; //a headerCell cellájának adom meg az éppen aktuális elemet
            headerRow.appendChild(headerCell); //végül a cellát hozzáadjuk a fejléc sorához
        }
    }
    
}

class Form extends Area{

}