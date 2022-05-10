firstButton = document.getElementById("firstButton");
console.log(firstButton);

firstButton.addEventListener('click',animation);

function animation(e){
    console.log(e.target);
    firstButton.classList.add('animate__animated', 'animate__flip')
}




