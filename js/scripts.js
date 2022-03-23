$(document).ready(function () {
  $("#wallPaperCalculator").submit(function (event) {
    function calculateArea(width, height) {
      var calculatedArea = width * height;
      console.log(`I have been called at the function level. The Area is: ${calculatedArea}`)
    }
    //TODO: Create Wall Constructor
    function Wall(width, height) {
      this.width = width;
      this.height = height;
    }
     //TODO: Add Area Prototype to Wall
     Wall.prototype.area = calculateArea;
    
   
    // * Get Wall Width
    var wall1Width = $("#wall1Width").val();
    //* Get Wall Height
    var wall1Height = $("#wall1Height").val();
    
    //* Declare wall 1
    var wall1 = new Wall(wall1Width, wall1Height);
    console.log("I am wall1: " + "Width: " + wall1.width, "Height: " + wall1.height);
    //* Calculate the area of wall 1
    wall1.area(wall1.width, wall1.height);
    console.log("You called me!!")

    // calculateArea(wall1.width, wall1.height);
    // "My Area is: " + wall1.area(wall1.width, wall1.height)
    // wall1.area();
    // console.log("The wall area prototype calculated me. Area: " + wall1.area)
    //TODO: add wallWidth class to wall inputs

    //TODO: Uncomment the line below
    //* this.reset();
    event.preventDefault();
  })
})
//Get height and width of wall 1. If time allows, have a function to select the units, but currently in metres.
// Have a button to add more walls
//Calculate area of each wall.
//Get total area of walls
//Input the height and width for the other wall
//Get the height and width of window 1
// Have a button to add more windows
//Calculate area of each window
//Get the total area of windows
//Get height and width of door
//Have a button to add other doors
//Calculate area of  each door.
//Get total area of windows
//Check if there are any additional spaces to be excluded
//Get height and width of the additional spaces
//Calculate area of the additional spaces
//Get total area of additional spaces
//Include 10% wastage
//Calculate total full coverage area  i.e walls + 10 % wastage
//Calculate total area to be excluded i.e windows, doors, additional spaces
//Calculate area to be covered by wallpaper i.e full coverage area - wallpaper area
//Calculate wallpaper area
//Calculate number of wallpaper rolls i.e total area/wallpaper area
//Display area and number of wallpaper rolls
