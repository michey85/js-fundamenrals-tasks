const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
}

function handleClick(event) {
    const btn = event.target;
    
    btn.dataset.clicked = +btn.dataset.clicked + 1;
}