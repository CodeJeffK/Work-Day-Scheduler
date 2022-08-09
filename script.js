// Display today's date
var today = moment()
$("#currentDay").text(today.format("MMMM Do, dddd"));

var currentHour = moment().format("H");

//function to change color of blocks as time passes
var colorCode = function(){
    let timeBlock = document.querySelectorAll(".row");
console.log(timeBlock);
console.log(currentHour);
console.log("the funciton is running");
                                    
    if (timeBlock == currentHour) {
        $(".description").addClass("present").removeClass("past future");
      }
    if (timeBlock < currentHour) {
        $(".description").addClass("past").removeClass("present future");
      }
    if (timeBlock > currentHour) {
        $(".description").addClass("future").removeClass("past present");
      }

}

colorCode();


// Save new event to local storage
var button = document.querySelectorAll("#btn");
var newEvent = document.querySelectorAll(".description")

newEvent.textContent = newEvent

button.addEventListener("click", function(event){
    event.preventDefault();

localStorage.setItem(".description", newEvent)
})