// var sum =  function(){
//     let x = 4;
//     let y = 5;
//     console.log(x + y)
// }

// var sub = () => {
//     let x = 4;
//     let y = 5;
//     console.log(x - y)
// }

// sum()
// sub()

// var obj = {
//     name: "John",
//     regularFunction: function() {
//       console.log(this);
//     },
//     arrowFunction: () => {
//       console.log(this);
//     }
//   };
  
//   obj.regularFunction(); // logs the obj object
//   obj.arrowFunction(); // logs the global object (i.e., window in a browser)

function searchFunction() {
  // Get the input value from the search bar
  let input = document.getElementById("searchInput").value.toLowerCase();
  // console.log(input)
  // Get all the values on the page that need to be searched
  let values = document.getElementsByClassName("searchable");
  // console.log(values)
  // Loop through the values and hide the ones that don't match the search input
  for (let i = 0; i < values.length; i++) {
    let value = values[i].textContent.toLowerCase();
    // console.log(value)
    if (value.indexOf(input) > -1) {
      values[i].style.display = "";
    } else {
      values[i].style.display = "none";
    }
  }
}

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", searchFunction);


