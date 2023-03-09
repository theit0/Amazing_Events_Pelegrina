const $templateCard = document.querySelector(".templateCard").content,
      $cards = document.querySelector(".cards"),
      $fragment = document.createDocumentFragment();

// Mostrar todos los eventos
const $showAllButton = document.querySelector(".show-events-button");

$showAllButton.addEventListener('click',()=>{
    const $cardContainer = document.querySelectorAll(".card");
    for (let i of $cardContainer) {
        $cards.removeChild(i)
    }

    data.events.forEach((elem)=>{
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

});
    
