
// Detecting button clicks

for(let i=0; i<document.querySelectorAll(".drum").length; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
}

// for detecting keypresses

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
switch (key) {
    case "w":
        let ad=new Audio("sounds/crash.mp3");
        ad.play();
        break;
    case "a":
        let ad1=new Audio("sounds/kick-bass.mp3");
        ad1.play();
        break;
    case "s":
        let ad2=new Audio("sounds/snare.mp3");
        ad2.play();
        break;
    case "d":
        let ad3=new Audio("sounds/tom-1.mp3");
        ad3.play();
        break;
    case "j":
        let ad4=new Audio("sounds/tom-2.mp3");
        ad4.play();
        break;
    case "k":
        let ad5=new Audio("sounds/tom-3.mp3");
        ad5.play();
        break;
    case "l":
        let ad6=new Audio("sounds/tom-4.mp3");
        ad6.play();
        break;
    
  
    default:
        console.log(this.innerHTML);
        break;
  }
}


function buttonAnimation(ckey){
    let butt=document.querySelector("."+ckey);
   butt.classList.add("pressed");
   setTimeout(function(){
    butt.classList.remove("pressed");

}, 100);

}
// This code detects button clicks and key presses to play corresponding drum sounds.