function debounce(func, wait = 20, immediate = true) {
var timeout;
return function () {
    var context = this,
    args = arguments;
    var later = function () {
    timeout = null;
    if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
};
}

const slideIn = document.querySelectorAll('.slide-in')

const appearOptions = {
    threshold: .2,
    rootMargin: '50px 10px -50px -10px' 
  }
  
  const appearOnScroll = new IntersectionObserver((entry, appearOnScroll) => {
    entry.forEach(entry=>{
      if(!entry.isIntersecting){
        return;
      } else {
        entry.target.classList.add('active');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, appearOptions);
  
  
  slideIn.forEach(slider =>{
    appearOnScroll.observe(slider);
  })