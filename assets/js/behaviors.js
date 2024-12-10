const arrow1 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-circle-fill text-lava" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
        </svg>`

const arrow2 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-circle text-lava" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>`


const clipboard1 = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                class="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
            </svg>
        `

const clipboard2 = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                    class="bi bi-clipboard2-fill" viewBox="0 0 16 16">
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                    <path d="M3.5 1h.585A1.5 1.5 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5q-.001-.264-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1"/>
                </svg>
            `


const mybutton = document.getElementById("myBtn");
mybutton.onclick = topFunction
mybutton.onmouseenter = function () {
    this.innerHTML = arrow1
    this.onclick = topFunction
    mybutton.addEventListener("touchstart", topFunction);
}
mybutton.onmouseleave = function () {
    this.innerHTML = arrow2
    this.onclick = topFunction
    mybutton.addEventListener("touchstart", topFunction);
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.innerHTML = arrow2
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.querySelector('aside').scrollIntoView({ block: "start", inline: "end" })
}


function copyToClipboard(button) {

    const targetButton = button.target.closest('[data-copiar]');

    const codeBlock = targetButton.parentElement.parentElement.querySelector('code').innerText;

    navigator.clipboard.writeText(codeBlock).then(() => {
        targetButton.innerHTML = clipboard1;

        setTimeout(() => {
            targetButton.innerHTML = clipboard2;
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

hljs.highlightAll();

setTimeout(() => {
    document.querySelectorAll('code.language-php').forEach(block => {
        block.innerHTML = block.innerHTML.replace(/, function \(/g, ', <span class="hljs-keyword">function</span> (');
    });
}, 300);

setTimeout(() => {
    document.querySelectorAll('code.language-html').forEach(block => {
        block.innerHTML = block.innerHTML.replace(/&lt;\?=/g, '<span class="hljs-meta">&lt;?=</span>');
        block.innerHTML = block.innerHTML.replace(/\?&gt;/g, '<span class="hljs-meta">?&gt;</span>');
        block.innerHTML = block.innerHTML.replace(/\$[^\s()]+/g, match => {
            return `<span class="hljs-variable">${match}</span>`;
        });
        block.innerHTML = block.innerHTML.replace(/(?<=\s)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g, match => {
            return `<span class="hljs-title function_ invoke__">${match}</span>`;
        });
        block.innerHTML = block.innerHTML.replace(/'[^']*'/g, match => {
            return `<span class="hljs-string">${match}</span>`;
        });
    });
}, 300);


document.querySelectorAll('[data-copiar]').forEach(block => {
    block.addEventListener('click', copyToClipboard);
});