const secondsHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')

function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDegree=((seconds/60)*360)+90;
    secondsHand.style.transform=`rotate(${secondsDegree}deg)`
    
    const minutes = now.getMinutes()
    const minuteDegree = ((minutes/60)*360)+90
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`
    
    const hour = now.getMinutes()
    const hourDegree = ((minutes/12)*360)
    hourHand.style.transform=`rotate(${hourDegree}deg)`
    

}

setInterval(setDate,1000)