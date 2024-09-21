const HomeParent = document.querySelector(".home-increment");
const homeCounter = document.querySelector(".home-counter");

const GuestParent = document.querySelector(".guest-increment");
const guestCounter = document.querySelector(".guest-counter");

const resetBtn = document.querySelector(".btn");

let counter = 0;
let CounterGuest = 0;

HomeParent.addEventListener("click", (e)=>{
if (e.target.classList.contains("plus-one")){
    counter++
    homeCounter.innerText = counter;   
} else if (e.target.classList.contains("plus-two")) {
    counter = counter + 2;
    homeCounter.innerText = counter;   
} else if (e.target.classList.contains("plus-three")) {
    counter = counter + 3;
    homeCounter.innerText = counter;   
} 
})

GuestParent.addEventListener("click", (e)=>{
    if (e.target.classList.contains("plus-one")){
        CounterGuest++
        guestCounter.innerText = CounterGuest;   
    } else if (e.target.classList.contains("plus-two")) {
        CounterGuest = CounterGuest + 2;
        guestCounter.innerText = CounterGuest;   
    } else if (e.target.classList.contains("plus-three")) {
        CounterGuest = CounterGuest + 3;
        guestCounter.innerText = CounterGuest;   
    } 
    })

    resetBtn.addEventListener("click", ()=>{
        counter = 0;
        CounterGuest = 0;
        guestCounter.innerText = counter;   
        homeCounter.innerText = CounterGuest;   
    })