

const $templateCard = document.querySelector(".templateCard").content;
const $cards = document.querySelector(".cards");
const $fragment = document.createDocumentFragment();

pullData().then(data=>{
    printCard(data.events);
    window.APIdata = data.events;
})

  
  
