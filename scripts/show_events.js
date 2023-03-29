const $showAllButton = document.querySelector(".show-events-button");
const $deleteAllButton = document.querySelector(".delete-events-button");

function addEvents() {
  pullData().then(data => {
    const $cardContainer = document.querySelectorAll(".card");
    const $errorContainer = document.querySelector(".error-container")
    $cardContainer.forEach(card => card.remove());
    $errorContainer.style.display = 'none';
    printCard(data.events);
  });
}

function deleteAllEvents() {
  const $card = document.querySelectorAll(".card"); 
  $card.forEach(card => card.remove());
}

$showAllButton.addEventListener('click', addEvents);
$deleteAllButton.addEventListener('click', deleteAllEvents);
