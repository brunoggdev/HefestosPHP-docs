fetch('menu.html')
.then(response => response.text())
.then(html => {
    document.querySelector('aside').innerHTML = html;
    
    const pagina_atual = window.location.href.split('/').pop().split('.')[0];
    const paginas = Array.from(document.getElementsByClassName('list-group-item'));

    for (const pagina of paginas) {
        if (pagina.innerText === pagina_atual) {
            pagina.closest('.accordion-collapse').previousElementSibling.firstChild.nextElementSibling.click()
            pagina.classList.add('bg-lava');
        }
    }
})