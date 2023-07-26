const icon1 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-circle-fill text-lava" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
        </svg>`
        
const icon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-circle text-lava" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>`

const mybutton = document.getElementById("myBtn");
mybutton.onclick = topFunction
mybutton.onmouseenter = function() {
    this.innerHTML = icon1
    this.onclick = topFunction
    mybutton.addEventListener("touchstart", topFunction);
}
mybutton.onmouseleave = function() {
    this.innerHTML = icon2
    this.onclick = topFunction
    mybutton.addEventListener("touchstart", topFunction);
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.innerHTML = icon2
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    console.log('called')
    document.querySelector('aside').scrollIntoView({block: "start"})
}