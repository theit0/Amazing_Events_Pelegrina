// Crear dinamicamente los checkboxes
const $categories = document.querySelector(".categories"),
      categories = ['Food Fair','Museum','Costume Party','Race','Book Exchange','Cinema'];

categories.forEach((category)=>{
    let $input = document.createElement("input");
    $input.setAttribute("type","checkbox");
    $input.setAttribute("name",category);
    $input.setAttribute("id",category);
    let $label = document.createElement("label");
    $label.setAttribute("for",category);
    $label.textContent = category;
    let $div = document.createElement("div");
    console.log($input);
    console.log($label)
    $div.append($input,$label);
    $categories.appendChild($div);
})

const $checkboxes = document.querySelectorAll(".categories input[type='checkbox']");


const $searchInput = document.querySelector("input[type='search']"); 
const $searchButton = document.querySelector(".search-button");

//Filtrar eventos mediante los checkboxes
function filterEvents () {
    const $arrayOfNodes = Array.from($checkboxes);
    const $categoriesChecked = $arrayOfNodes.filter((checkbox)=>checkbox.checked);
    const $categoriesNames = $categoriesChecked.map((category)=> category.name);

    const eventsFiltered = data.events.filter((event)=>{
        return $categoriesNames.includes(event.category) || (event.name.toLowerCase().includes($searchInput.value.toLowerCase()) && $searchInput.value.toLowerCase() !==""); 
    });

    eventsFiltered.forEach((elem)=>{
        $templateCard.querySelector("img").setAttribute("src",elem.image);
        $templateCard.querySelector("img").setAttribute("alt",elem.name);
        $templateCard.querySelector("a").setAttribute("href",`./details.html?id=${elem._id}`);
        $templateCard.querySelector("h4").textContent = elem.name;
        $templateCard.querySelector("p").textContent = elem.description;
        $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;
    

        let $clone = document.importNode($templateCard,true);
        $fragment.append($clone);
    });

    $cards.append($fragment);
}

$searchButton.addEventListener('click',(event)=>{
    const $cardContainer = document.querySelectorAll(".card");
    for (let i of $cardContainer) {
        $cards.removeChild(i)
    }
    filterEvents();
    $searchInput.value = "";
    event.preventDefault();
})
