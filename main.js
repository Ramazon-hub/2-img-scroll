function move(){
    let moveValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0,"+ moveValue +"% 0, "+ moveValue +"% 100%, 0 100% )"
}