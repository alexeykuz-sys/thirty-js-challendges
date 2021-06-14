const inputRef = document.querySelectorAll('.controls input')

const handleUpdate = (e)=>{
    const indexRef =e.target.dataset.sizing || '';
    console.log(e.target.name)
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value+indexRef)
}
inputRef.forEach(input=> input.addEventListener('change', handleUpdate))
inputRef.forEach(input=> input.addEventListener('mouseover', handleUpdate))