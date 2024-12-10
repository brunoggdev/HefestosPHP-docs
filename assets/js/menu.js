fetch('menu.html')
.then(response => response.text())
.then(html => {
    document.querySelector('aside').innerHTML = html;
    
    const pagina_atual = window.location.href.split('/').pop().split('.')[0];
    const paginas = Array.from(document.getElementsByClassName('list-group-item'));

    for (const pagina of paginas) {        
        if (pagina.innerText.toLowerCase() === 'intro') {
            pagina.classList.remove('list-group-item')
        }


        if (pagina.innerText.toLowerCase() === pagina_atual.toLowerCase()) {

            if (pagina_atual.toLowerCase() === 'intro') {
                pagina.style.color = '#f0f0f0';
                pagina.style.backgroundColor = 'var(--color-lava-dim)';
                continue;
            }

            pagina.closest('.accordion-collapse').previousElementSibling.firstChild.nextElementSibling.click()
            pagina.classList.add('bg-lava');
            return;
        }
    }
})