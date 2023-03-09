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

//Filtrar eventos mediante los checkboxes
function filtrarEventos () {
    const $arrayOfNodes = Array.from($checkboxes);
    const $categoriesChecked = $arrayOfNodes.filter((checkbox)=>checkbox.checked);
    const $categoriesNames = $categoriesChecked.map((category)=> category.name);
     
    console.log($categoriesNames);
    
    const eventsFiltered = data.events.filter((event)=>{
        console.log(event.category);
        return $categoriesNames.includes(event.category); 
    });
    eventsFiltered.forEach((elem)=>{
        $templateCard.querySelector("img").setAttribute("src",elem.image);
        $templateCard.querySelector("img").setAttribute("alt",elem.name);
        $templateCard.querySelector("h4").textContent = elem.name;
        $templateCard.querySelector("p").textContent = elem.description;
        $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;
    
        let $clone = document.importNode($templateCard,true);
        $fragment.append($clone);
    });
    $cards.append($fragment);
    console.log($cards.querySelectorAll(".card"));
}


for (let i of $checkboxes) {
    i.addEventListener('change',()=>{
        const $cardContainer = document.querySelectorAll(".card");
        for (let i of $cardContainer) {
            $cards.removeChild(i)
        }
        filtrarEventos();
        console.log($cardContainer);
    })
    console.log(i);
}


