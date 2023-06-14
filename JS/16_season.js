
function Mon(month){
    if (month === "September" || month === "October" || month === "November") {
        return  console.log("Autumn");
      } else if (month === "December" || month === "January" || month === "February") {
        return console.log("Winter");
      } else if (month === "March" || month === "April" || month === "May") {
        return console.log("Spring");
      } else if (month === "June" || month === "July" || month === "August") {
        return console.log("Summer");
      } else {
        return console.log("Invalid month");
      }
}

Mon('October')