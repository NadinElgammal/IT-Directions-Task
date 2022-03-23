  //javascript for the responsive navigation menu
  var menu = document.querySelector(".menu");
  var menuBtn = document.querySelector(".menu-btn");
  var closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });


  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });




  const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})
