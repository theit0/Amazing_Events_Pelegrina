// Mostrar todos los eventos
const $showAllButton = document.querySelector(".show-events-button");
const $deleteAllButton = document.querySelector(".delete-events-button");

//Agregar todos los eventos
pullData().then(data=>{
    $showAllButton.addEventListener('click',()=>{
        const $cardContainer = document.querySelectorAll(".card");
        for (let i of $cardContainer) {
            $cards.removeChild(i)
        }
        printCard(data.events);
    });
})

//Borrar todos los elementos
$deleteAllButton.addEventListener('click',()=>{
    const $card = document.querySelectorAll(".card"); 
    $card.forEach((elem)=>{
        $cards.removeChild(elem);
    })
});
    
