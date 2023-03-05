const $toggleSwitch = document.querySelectorAll('.input-switch'),
      $card = document.querySelectorAll(".card"),
      $titlePrice = document.querySelectorAll(".title-price"),
      $h4 = document.querySelectorAll("h4"),
      $a = document.querySelectorAll("a"),
      $main = document.querySelector("main"),
      $svg = document.querySelectorAll("svg"),
      $table = document.querySelector("table");


$toggleSwitch.forEach(element => {
    element.addEventListener('click',() => {
        $h4.forEach(elem=> elem.classList.toggle("white-text"));
        $titlePrice.forEach(elem=>elem.classList.toggle("white-text"));
        $card.forEach(elem => elem.classList.toggle("dark-card"));
        $svg.forEach(elem =>elem.classList.toggle("white-text"));
        document.body.classList.toggle("dark-card");
        $main.classList.toggle('dark-main');
        $table.classList.toggle("dark-card");
    });
}); 

