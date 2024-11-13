const divs = document.querySelectorAll("div");
const button = document.querySelectorAll("button");

function logText(e){
    console.log(this.classList.value);
    //e.stopPropagation();
}


divs.forEach(div => div.addEventListener("click", logText, {
    capture: false,
    once: true
}));

button.forEach((button) => button.addEventListener("click", () => {
    console.log('Click');
}, {
    once: true
}));