const $templateCard = document.querySelector(".templateCard").content,
      $cards = document.querySelector(".cards"),
      $fragment = document.createDocumentFragment();

let currentDate = new Date(data.currentDate.split('-').join('/'));

const filteredEvents = data.events.filter((evento)=>{
  return (new Date(evento.date)) > currentDate;
});

filteredEvents.forEach((elem)=>{
    $templateCard.querySelector("img").setAttribute("src",elem.image);
    $templateCard.querySelector("img").setAttribute("alt",elem.name);
    $templateCard.querySelector("h4").textContent = elem.name;
    $templateCard.querySelector("p").textContent = elem.description;
    $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;

    let $clone = document.importNode($templateCard,true);
    //Uso de fragment para no tener que agregar un elemento por vez
    // y de esta forma mejor el rendimiento de la página
    $fragment.append($clone);
})

$cards.append($fragment);