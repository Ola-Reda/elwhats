// header = document.querySelector("header");
// window.addEventListener("scroll", function () {
//     if ( > 150 ){
//         header.classList.toggle("sticky", window.scroll)

//     } else {

//     }
// })


///////////animation/////////////
function reveal () {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;


        if (elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("appear");
        } else {
            reveals[i].classList.remove("appear");
        }
    }

}

window.addEventListener("scroll", reveal);