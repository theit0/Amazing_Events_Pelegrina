// Mostrar todos los eventos
const $showAllButton = document.querySelector(".show-events-button");
const $deleteAllButton = document.querySelector(".delete-events-button");

$showAllButton.addEventListener('click',()=>{
    const $cardContainer = document.querySelectorAll(".card");
    for (let i of $cardContainer) {
        $cards.removeChild(i)
    }

    events.forEach((event)=>{
        $templateCard.querySelector("img").setAttribute("src",event.image);
        $templateCard.querySelector("a").setAttribute("href",`./details.html?id=${event._id}`);
        $templateCard.querySelector("img").setAttribute("alt",event.name);
        $templateCard.querySelector("h4").textContent = event.name;
        $templateCard.querySelector("p").textContent = event.description;
        $templateCard.querySelector("h6").textContent = `Price: $${event.price}`;
        

        let $clone = document.importNode($templateCard,true);
        //Uso de fragment para no tener que agregar un elemento por vez
        // y de esta forma mejor el rendimiento de la página
        $fragment.append($clone);
    });
    $cards.append($fragment);

});

//Borrar todos los elementos
$deleteAllButton.addEventListener('click',()=>{
    const $card = document.querySelectorAll(".card"); 
    $card.forEach((elem)=>{
        $cards.removeChild(elem);
    })
});
    
