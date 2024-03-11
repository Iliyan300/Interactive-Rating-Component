const ratingComponent = document.querySelector(".rating-component");
const thankyouComponent = document.querySelector(".thankyou-component");
const rating = document.querySelector(".rating");

const ratingBtns = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit-btn");
const rateBtn = document.getElementById("rate-btn");



submitBtn.addEventListener("click", () => {

    thankyouComponent.classList.remove("hidden");
    ratingComponent.style.display = "none";


});


rateBtn.addEventListener("click", () => {

    thankyouComponent.classList.add("hidden");
    ratingComponent.style.display = "block";

});


ratingBtns.forEach((rate) => {

    rate.addEventListener("click", () => {

        rating.innerHTML = rate.innerHTML;


    })

});
