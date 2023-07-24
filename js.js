fetch('menu.html')
.then(response => response.text())
.then(html => {
    document.querySelector('aside').innerHTML = html;
})