const tableArea = new Table("table");


const formFields = [// Adatstruktúra (mezők definiálása)
    { id: "nev", label: "Nev", type: "text", errorClass: "error" },
    { id: "szamjegyek", label: "Számjegyek száma", type: "text", errorClass: "error" },
    { id: "szazad", label: "Század", type: "text", errorClass: "error" },
];

const form = new Form(formFields);