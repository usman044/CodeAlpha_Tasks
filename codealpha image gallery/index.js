const scrollB = document.querySelector(".scroll-hor-bar")

const right = document.querySelector(".right-arrow");
const left = document.querySelector(".left-arrow");



right.addEventListener("click",()=>{
    scrollB.scrollBy({ left: 1000, behavior: "smooth" });
})

left.addEventListener("click",()=>{
    scrollB.scrollBy({ left: -1000, behavior: "smooth" });
})



const bars = document.querySelector(".bars");
const header = document.querySelector('.header ul');
const cross = document.querySelector(".cross");

function callBars() {
    // Check computed styles, not just inline ones
    const isHidden = window.getComputedStyle(header).display === "none";

    if (isHidden) {
        header.style.display = "block";
        bars.style.display = "none";
        cross.style.display = "block"
    } else {
        header.style.display = "none"; 
        bars.style.display = "block";
        cross.style.display = "none";
    }
}

