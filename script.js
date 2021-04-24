// DEPENDENCIES
var displayTime = $("#currentDay");
var timeContainer = $(".container");
var saveBtn = $(".saveBtn");

// VARIABLES
var currentHour = moment().format("H");
var timeSlot1 = `<section class="row time-block">
    <div class="col-2 col-xl-1 hour p-2">`
var timeSlot2 = `</div>
    <textarea class="col-8 col-xl-10 past description" placeholder = "Plans"` 
var timeSlot3 = `</textarea>
    <button class="col-2 col-xl-1 saveBtn"><i>Save</i></button>
    </section>`
var timeSlot = `
    <section class="row time-block">
    <div class="col-2 col-xl-1 hour p-2"></div>
    <textarea class="col-8 col-xl-10 description" placeholder = "Plans"></textarea>
    <button class="col-2 col-xl-1 saveBtn"><i>Save</i></button>
    </section>`

// FUNCTIONS

// Initialize, generate timeslots for hours of day
function init() {
    // Clock 
    displayTime.text(moment().format("h:mm:ss a, dddd, MMMM Do YYYY"));
    // Create and append time slots
    fillTime();
    // Save button event listener
    $(".saveBtn").on("click", saveDescription); 
}

// Fill day with timeslots
function fillTime() {
    for (i = 6; i < 22; i++) {
        timeContainer.append(genElement(i));
    }
}
// Return time slot as a JQuery element
function genElement(hour) {
    var time = moment(hour, "H").format("h A")
    
    var savedText = "";
    if (localStorage.getItem(time)) {
        savedText = localStorage.getItem(time);
    }

    var slotElement = $(timeSlot);
    slotElement.children(".hour").text(time);
    slotElement.children("textarea").data("time", time);
    if (currentHour > hour) {
        slotElement.children("textarea").addClass("past");
    } else if (currentHour == hour) {
        slotElement.children("textarea").addClass("present");
    } else {
        slotElement.children("textarea").addClass("future");
    } 
    
    return slotElement;
}
// Save description in row after save button click
function saveDescription(event) {
    var key = $(this).siblings("textarea").data("time");
    var text = $(this).siblings("textarea").val();
    localStorage.setItem(key, text);
}
// Update clock to current time
function updateTime() {
    var now = moment();
    displayTime.text(now.format("h:mm:ss a, dddd, MMMM Do YYYY"));
    if (currentHour !== now.format("H")) {
        updateBlocks();
    }
}
// Update timeblock colors
function updateBlocks() {
    for (i = 6; i < 22; i++) {
        var time = moment(i, "H").format();
    }
}


// EVENTLISTENERS

// INITIALIZATION
init();
// Clock
setInterval(updateTime, 1000);