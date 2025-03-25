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

class Form extends Area {
    constructor(formFields) {
        super('form'); // Meghívjuk az Area osztály konstruktorát "form" osztálynévvel
        this.generateForm(formFields); // Meghívjuk a `generateForm` metódust a formFields alapján
    }

    generateForm(formFields) {
        const form = document.createElement('form'); // Létrehozunk egy form elemet
        form.id = 'form'; // Beállítjuk az űrlap azonosítóját
        this.div.appendChild(form); // Hozzáadjuk az űrlapot a `div`-hez (az Area osztály biztosítja)

        // Végigmegyünk a formFields tömbön, és hozzáadjuk az input mezőket és hibadobozokat
        for (const field of formFields) {
            const fieldDiv = document.createElement('div'); // Egy új div minden mezőnek
            fieldDiv.classList.add('field');

            const label = document.createElement('label'); // Létrehozunk egy címkét
            label.innerText = field.label; // Beállítjuk a címkét
            fieldDiv.appendChild(label); // Hozzáadjuk a div-hez

            const input = document.createElement('input'); // Létrehozunk egy input mezőt
            input.type = field.type || 'text'; // Ha nincs típus, alapértelmezetten "text"
            input.id = field.id; // Beállítjuk az azonosítót
            fieldDiv.appendChild(input); // Hozzáadjuk a div-hez

            const errorDiv = document.createElement('div'); // Létrehozunk egy hibamezőt
            errorDiv.classList.add(field.errorClass || 'error'); // Ha nincs osztálynév, alapértelmezetten "error"
            fieldDiv.appendChild(errorDiv); // Hozzáadjuk a div-hez

            form.appendChild(fieldDiv); // Hozzáadjuk a form-hoz
        }

        // Létrehozzuk a Hozzáadás gombot
        const button = document.createElement('button');
        button.type = 'submit'; // Submit típusú gomb
        button.innerText = 'Hozzáadás'; // A gomb szövege
        form.appendChild(button); // Hozzáadjuk a form-hoz
    }
}
