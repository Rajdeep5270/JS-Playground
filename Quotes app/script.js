let theme = document.getElementById('theme');
let logo = document.getElementById('logo');
let list = document.getElementById('list');

theme.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    logo.style.color = "white";
    theme.innerText = "Dark";
    list.querySelectorAll('a').forEach(a => {
        a.style.color = "white";
    })
})