const tabs = document.querySelectorAll('.tab');

// let selectedTab;

tabs.forEach ((tab) => {
tab.addEventListener("click", (event) => {
    deselect();
   tab = event.target; //or currentTarget
    tab.classList.toggle ('tab--selected');
   
})

tab.addEventListener("mouseenter", (event) => {
    tab.classList.toggle ('tab--hover');
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