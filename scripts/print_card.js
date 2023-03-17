function printCard(events){
    events.forEach((event)=>{
        $templateCard.querySelector("img").setAttribute("src",event.image);
        $templateCard.querySelector("a").setAttribute("href",`./details.html?id=${event._id}`);
        $templateCard.querySelector("img").setAttribute("alt",event.name);
        $templateCard.querySelector("h4").textContent = event.name;
        $templateCard.querySelector("p").textContent = event.description;
        $templateCard.querySelector("h6").textContent = `Price: $${event.price}`;
        let $clone = document.importNode($templateCard,true);
        $fragment.append($clone);
    });
    $cards.append($fragment);
}