const colour = ["#ec9b3b", "#ee5586", "#f7911a", "#82bb30", "#2596be"];
const cardColorElements = document.querySelectorAll('.clash-card__unit-stats');
let oneThird = document.querySelectorAll(".one-third div");

Array.from(cardColorElements).forEach((element, index) => {
  element.style.backgroundColor = colour[index % colour.length];
});

oneThird.forEach((e) =>{
  e.style.color="#fff";
})

// colour.forEach((e, i) => {
//     console.log(e)
//     console.log(i)
// })
