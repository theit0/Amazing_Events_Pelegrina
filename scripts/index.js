const $templateCard = document.querySelector(".templateCard").content,
      $cards = document.querySelector(".cards"),
      $fragment = document.createDocumentFragment(),
      $checkboxes = document.querySelectorAll(".categories input[type='checkbox']");



console.log($checkboxes);

/* const arrayOfNodes = Array.from($checkboxes);
const categoriesChecked = arrayOfNodes.filter((checkbox)=>checkbox.checked);
const categoriesNames = categoriesChecked.map((category)=> category.name);


console.log(categoriesNames);

const eventsFiltered = data.events.filter((event)=>{
    console.log(event.category);
    return categoriesNames.includes(event.category); 
}) 
 */
function filtrarEventos () {
    const arrayOfNodes = Array.from($checkboxes);
    const categoriesChecked = arrayOfNodes.filter((checkbox)=>checkbox.checked);
    const categoriesNames = categoriesChecked.map((category)=> category.name);
    
    
    console.log(categoriesNames);
    
    const eventsFiltered = data.events.filter((event)=>{
        console.log(event.category);
        return categoriesNames.includes(event.category); 
    });
    eventsFiltered.forEach((elem)=>{
        $templateCard.querySelector("img").setAttribute("src",elem.image);
        $templateCard.querySelector("img").setAttribute("alt",elem.name);
        $templateCard.querySelector("h4").textContent = elem.name;
        $templateCard.querySelector("p").textContent = elem.description;
        $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;
    
        
        let $clone = document.importNode($templateCard,true);
        //Uso de fragment para no tener que agregar un elemento por vez
        // y de esta forma mejor el rendimiento de la página
        $fragment.append($clone);
    });
    $cards.append($fragment);
    console.log($cards.querySelectorAll(".card"))
}

function limpiarEventos(cards) {
    
}

for (let i of $checkboxes) {
    i.addEventListener('change',()=>{
        filtrarEventos();
        
        /* eventsFiltered.forEach((elem)=>{
            $templateCard.querySelector("img").setAttribute("src",elem.image);
            $templateCard.querySelector("img").setAttribute("alt",elem.name);
            $templateCard.querySelector("h4").textContent = elem.name;
            $templateCard.querySelector("p").textContent = elem.description;
            $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;
        
            
            let $clone = document.importNode($templateCard,true);
            //Uso de fragment para no tener que agregar un elemento por vez
            // y de esta forma mejor el rendimiento de la página
            $fragment.append($clone);
        }) */
    })
    console.log(i);
}

/* eventsFiltered.forEach((elem)=>{
    $templateCard.querySelector("img").setAttribute("src",elem.image);
    $templateCard.querySelector("img").setAttribute("alt",elem.name);
    $templateCard.querySelector("h4").textContent = elem.name;
    $templateCard.querySelector("p").textContent = elem.description;
    $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;

    
    let $clone = document.importNode($templateCard,true);
    //Uso de fragment para no tener que agregar un elemento por vez
    // y de esta forma mejor el rendimiento de la página
    $fragment.append($clone);
}) */

/* $cards.append($fragment);
 */
