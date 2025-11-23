const pizzasButton = document.querySelector('section#pizzas>button');
pizzasButton.addEventListener("click", pizzaDropdownToogle);

function pizzaDropdownToogle() {
    const pizzasList = document.querySelector('div.pizzas');
    switch (pizzasList.attributes['data-state'].value) {
        case "closed":
            pizzasList.attributes['data-state'].value = "opened";
            pizzasButton.innerHTML = "Voir moins";
            break;

        case "opened":
            pizzasList.attributes['data-state'].value = "closed";
            pizzasButton.innerHTML = "Voir toutes nos pizzas";
            break;

        default:
            break;
    }
}