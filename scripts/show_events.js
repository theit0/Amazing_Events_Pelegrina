// Mostrar todos los eventos
const $showAllButton = document.querySelector(".show-events-button");
const $deleteAllButton = document.querySelector(".delete-events-button");

//Agregar todos los eventos
pullData().then(data=>{
    $showAllButton.addEventListener('click',()=>{
        const $cardContainer = document.querySelectorAll(".card");
        const $errorContainer = document.querySelector(".error-container")
        for (let i of $cardContainer) {
            $cards.removeChild(i)
        }
        $errorContainer.style.display = 'none';
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
    
