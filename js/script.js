var btn = document.getElementById("btnlist")
var nav = document.getElementById("navbar")
var headtop = document.getElementById("headtop") 
var logo = document.getElementById("logo") 

btn.addEventListener("click", function(){
    btn.classList.toggle("active")
    nav.classList.toggle("active")
    headtop.classList.toggle("active")
})
window.onscroll = function(){
    if(window.scrollY >= (screen.height - 500)){
        headtop.classList.add("scrolled");
        logo.src="imgs/Logo_logo Blanc.svg";
    }
    else{
        headtop.classList.remove("scrolled")
        logo.src="imgs/Logo_logo couleur.svg";
    }
   
}





