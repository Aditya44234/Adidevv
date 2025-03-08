

let navlist=document.querySelector(".navlist");

let menubar=document.querySelector(".menubar");

let bgcolor =document.querySelector(".bgcolor");


let menuIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-xmark");



menubar.addEventListener("click",()=>{
    navlist.classList.toggle("active");
    menuIcon.classList.toggle("active");
    closeIcon.classList.toggle("hidden");
})


