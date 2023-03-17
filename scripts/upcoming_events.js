const $templateCard = document.querySelector(".templateCard").content;
const $cards = document.querySelector(".cards");
const $fragment = document.createDocumentFragment();

const events = pullData().then((data)=>{
  let currentDate = new Date(data.currentDate.split('-').join('/'));

  const events = data.events.filter((evento)=>{
    return (new Date(evento.date)) > currentDate;
  });
  
  events.forEach((elem)=>{
      $templateCard.querySelector("img").setAttribute("src",elem.image);
      $templateCard.querySelector("img").setAttribute("alt",elem.name);
      $templateCard.querySelector("a").setAttribute("href",`./details.html?id=${elem._id}`);
      $templateCard.querySelector("h4").textContent = elem.name;
      $templateCard.querySelector("p").textContent = elem.description;
      $templateCard.querySelector("h6").textContent = `Price: $${elem.price}`;
      let $clone = document.importNode($templateCard,true);
      $fragment.append($clone);
  })
  
  $cards.append($fragment);
});



