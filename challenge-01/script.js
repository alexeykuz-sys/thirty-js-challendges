let sound = {
    71: 'sounds/sounds_boom.wav',
    65: 'sounds/sounds_clap.wav',
    83: 'sounds/sounds_hihat.wav',
    68: 'sounds/sounds_kick.wav',
    70: 'sounds/sounds_openhat.wav',
    72: 'sounds/sounds_ride.wav',
    74: 'sounds/sounds_snare.wav',
    73: 'sounds/sounds_tink.wav',
    75: 'sounds/sounds_tom.wav'
}

window.addEventListener('keydown', (ev)=>{
    audio = new Audio(sound[ev.keyCode])
    if(!audio) return
    audio.play();
    const key=document.querySelector(`.key[data-key="${ev.keyCode}"]`)
    key.classList.add('playing')
})

function removeTransition(ev){
        if(ev.propertyName !== 'transform') return
        
        this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend',(removeTransition)))
