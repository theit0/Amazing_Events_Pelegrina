// Crear dinamicamente los checkboxes
const $categories = document.querySelector(".categories")
let categories = ['Food','Museum','Concert','Race','Books','Cinema','Party'];

categories.forEach((category)=>{
    const $input = document.createElement("input");
    $input.type = "checkbox";
    $input.name = category;
    $input.id = category;
    const $label = document.createElement("label");
    $label.setAttribute("for",category);
    $label.textContent = category;
    const $div = document.createElement("div");
    $div.append($input,$label);
    $categories.appendChild($div);
})

const $checkboxes = document.querySelectorAll(".categories input[type='checkbox']");
const $searchInput = document.querySelector("input[type='search']"); 
const $errorContainer = document.querySelector(".error-container")


// Filtrar eventos por categorías
const filterEventsByCategories = () => {
    $errorContainer.style.display = 'none';
    const $categoriesChecked = [...$checkboxes].filter(checkbox => checkbox.checked);
    const $categoriesNames = $categoriesChecked.map((category) => category.name);

    const events = window.APIdata;
    const eventsFiltered = events.filter(event => $categoriesNames.includes(event.category))
  
    return (eventsFiltered.length) ? eventsFiltered : events;
};
  
// Filtrar eventos por texto
const filterEventsByText = () => {
    const eventsFilteredByText = filterEventsByCategories().filter(event => event.name.toLowerCase().includes($searchInput.value.toLowerCase()));
    $errorContainer.style.display = !eventsFilteredByText.length ? 'flex' : 'none';
    return eventsFilteredByText;
}; 
 
// Función que llama a ambas funciones de filtro
const filterEvents = () => {
    const eventsFilteredByCategories = filterEventsByCategories();
    const eventsFilteredByText = filterEventsByText(eventsFilteredByCategories);

    const $cardContainer = document.querySelectorAll(".card");
    $cardContainer.forEach((card) => card.remove());

    printCard(eventsFilteredByText);
};
  
//Filtrar mediante texto
$searchInput.addEventListener('input',()=>{
    filterEvents();
})
//Filtrar mediante categorias
$checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',()=>{
        filterEvents();
    })    
})