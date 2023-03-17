const $templateCard = document.querySelector(".templateCard").content;
const $cards = document.querySelector(".cards");
const $fragment = document.createDocumentFragment();

const events = pullData().then((data)=>{
  let currentDate = new Date(data.currentDate.split('-').join('/'));

  const events = data.events.filter((evento)=>{
    return (new Date(evento.date)) < currentDate;
  });
  
  printCard(events);
});



