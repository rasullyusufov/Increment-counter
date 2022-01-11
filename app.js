const counters = document.querySelectorAll('.counter')
counters.forEach((counter)=>{
     counter.textContent = '0'
      
function updateCounter() {
    const target = +counter.getAttribute('data-target')
    const c = +counter.textContent
    const increment = target / 200
    console.log(increment);
    if(c < target){
        counter.textContent = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 9)
    }
    else{
        counter.textContent = target
    }
}
updateCounter()
})
