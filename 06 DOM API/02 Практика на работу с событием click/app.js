const buttons = document.getElementsByClassName('accordion');

for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const panel = buttons[i].nextElementSibling;
        panel.classList.toggle('show');
    })
}

// То же самое, чуть современнее
// const buttons = document.querySelectorAll('.accordion');
// buttons.forEach(btn => btn.addEventListener('click', () => {
//     const panel = btn.nextElementSibling;
//     panel.classList.toggle('show');
// }));