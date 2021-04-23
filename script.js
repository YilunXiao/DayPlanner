// DEPENDENCIES
var timeContainer = $(".container");
var saveBtn = $(".saveBtn");

// VARIABLES
var timeSlot = `
        <section class="row time-block">
        <div class="col-2 col-xl-1 hour p-2">Time</div>
        <textarea class="col-8 col-xl-10 past description">Description</textarea>
        <button class="col-2 col-xl-1 saveBtn"><i>Save</i></button>
        </section>`;

// FUNCTIONS
// Initialize, generate timeslots for hours of day
function init() {
    fillTime();
}
// Fill day with timeslots
function fillTime() {
    for (i = 0; i < 16; i++) {
        timeContainer.append(timeSlot);
    }
}
// Save description in row after btn click
function saveDescription() {
    console.log($(this).siblings("textarea").text());
}


// EVENTLISTENERS
saveBtn.on("click", saveDescription)

// INITIALIZATION
init();