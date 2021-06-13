const panels = document.querySelectorAll('.panel')
panelArray = Array.from(panels)
panelArray.forEach(panel => panel.addEventListener('click', ()=>{
    panel.classList.toggle('active')
    panel.children[0].classList.toggle('open-active');
    panel.children[1].classList.toggle('open-active');
    panel.children[2].classList.toggle('open-active');
}))