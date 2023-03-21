// Crear dinamicamente los checkboxes
const $categories = document.querySelector(".categories")
const categories = ['Food','Museum','Concert','Race','Books','Cinema','Party'];

categories.forEach((category)=>{
    let $input = document.createElement("input");
    $input.setAttribute("type","checkbox");
    $input.setAttribute("name",category);
    $input.setAttribute("id",category);
    let $label = document.createElement("label");
    $label.setAttribute("for",category);
    $label.textContent = category;
    let $div = document.createElement("div");
    $div.append($input,$label);
    $categories.appendChild($div);
})

const $checkboxes = document.querySelectorAll(".categories input[type='checkbox']");
const $searchInput = document.querySelector("input[type='search']"); 
const $errorContainer = document.querySelector(".error-container")

$errorContainer.style.display = 'none';

//Filtrar eventos
const filterEvents = ()=>{
    $errorContainer.style.display = 'none';
    const $arrayOfNodes = Array.from($checkboxes);
    const $categoriesChecked = $arrayOfNodes.filter((checkbox)=>checkbox.checked);
    const $categoriesNames = $categoriesChecked.map((category)=> category.name);

    const events = window.APIdata;

    const eventsFiltered = events.filter((event)=>{
        return  $categoriesNames.includes(event.category);
    });

    if(eventsFiltered.length ===0){
        events.forEach((event)=>{
            eventsFiltered.push(event);
        })
    }
    const eventsFilteredByText = eventsFiltered.filter((event)=>{
        return event.name.toLowerCase().includes($searchInput.value.toLowerCase());
    })

    if(eventsFilteredByText.length===0){
        $errorContainer.style.display = 'flex';
    }
    
    if ($categoriesChecked.length===0 && eventsFilteredByText.length===0){
        $errorContainer.style.display = 'none';
        printCard(events)    
    }
    printCard(eventsFilteredByText);
}

//Filtrar mediante texto
$searchInput.addEventListener('input',()=>{
    const $cardContainer = document.querySelectorAll(".card");
    for (let i of $cardContainer) {
        $cards.removeChild(i)
    }
    filterEvents();
})
//Filtrar mediante categorias
$checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',()=>{
        const $cardContainer = document.querySelectorAll(".card");
        for (let i of $cardContainer) {
            $cards.removeChild(i)
        }
        filterEvents();
    })    
})