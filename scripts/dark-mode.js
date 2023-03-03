const $toggleSwitch = document.querySelectorAll('.input-switch'),
      $card = document.querySelectorAll(".card"),
      $h6 = document.querySelectorAll("h6"),
      $h4 = document.querySelectorAll("h4"),
      $a = document.querySelectorAll("a"),
      $main = document.querySelector("main"),
      $svg = document.querySelectorAll("svg"),
      $h1 = document.querySelector("h1"),
      $table = document.querySelector("table");


$toggleSwitch.forEach(element => {
    element.addEventListener('click',() => {
        $h4.forEach(elem=> elem.classList.toggle("dark-text"));
        $h6.forEach(elem=>elem.classList.toggle('dark-text'));
        $card.forEach(elem => elem.classList.toggle("dark-card"));
        $svg.forEach(elem =>elem.classList.toggle("dark-text"));
        document.body.classList.toggle("dark-card");
        $main.classList.toggle('dark-main');
        $h1.classList.toggle("dark-text");
        $table.classList.toggle("dark-card");
    });
}); 

