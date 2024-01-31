const tabs = document.querySelectorAll('.tab');

// let selectedTab;

tabs.forEach ((tab) => {
tab.addEventListener("click", (event) => {
    deselect();
   tab = event.target; //or currentTarget
    tab.classList.toggle ('tab--selected');
   
})

tab.addEventListener("mouseenter", (event) => {
    tab.classList.add ('tab--hover');
})

tab.addEventListener("mouseleave", (event) => {
    tab.classList.remove ('tab--hover');
})
})


const deselect = () => {
    tabs.forEach ((tab) => {
        // if (tab !== event.target) {
        //     tab.classList.remove ('tab--selected');
        // }
        tab.classList.remove ('tab--selected');
    })
}

const body = document.body;
const scroller = document.querySelector('.scroller');
let rotateDeg = 0;

body.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {rotateDeg+=5} 
    else {rotateDeg-=5}
    scroller.style.transform = `rotate(${rotateDeg}deg)`;
})