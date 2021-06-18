let checkBox = document.querySelectorAll(".inbox input[type='checkbox']");
let checkBoxArray = Array.from(checkBox);
let lastChecked;

const handleCheck = (ev) => {
    let inBetween = false;
    if(ev.target.checked && ev.shiftKey){
        checkBox.forEach(box=>{
            if(box === ev.target || box === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                box.checked = true;
                console.log(lastChecked);
            }
        })
    }
    lastChecked = ev.target;
}


checkBoxArray.forEach(box => box.addEventListener('click', handleCheck));