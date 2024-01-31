// const box = document.getElementById('exercise_fixed_box');
// box.addEventListener("click", (event) => {
//     box.classList.add('fixed_box--animated')
// })

const dogPic = document.querySelector('.dog');
const spinner = document.querySelector('.spinner');

setTimeout (() => {
       dogPic.style.display = "block"
       spinner.style.display = "none"; 
}, 4000)