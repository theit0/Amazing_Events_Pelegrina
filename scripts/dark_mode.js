const $toggleSwitch = document.querySelectorAll('.input-switch'),
      $main = document.querySelector("main"),
      $svg = document.querySelectorAll("svg"),
      $table = document.querySelector("table");


$toggleSwitch.forEach(element => {
    element.addEventListener('click',() => {
        $svg.forEach(elem =>elem.classList.toggle("white-text"));
        document.body.classList.toggle("dark-card");
        $main.classList.toggle('dark-main');
        $table.classList.toggle("dark-card");
    });
}); 
