$(document).ready(function () {
  $("#wallPaperCalculator").submit(function (event) {
    function calculateArea(width, height) {
      var calculatedArea = width * height;

      return calculatedArea;
    }
    //* Create Partition Class
    class Partition {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }
    }
    //* Add Area Prototype to Partition
    Partition.prototype.area = calculateArea;

    //! WALL SECTION
    //? Wall 1
    // * Get Wall 1  Width 
    var wall1Width = $("#wall1Width").val();

    //* Get Wall 1 Height 
    var wall1Height = $("#wall1Height").val();

    //* Create Wall1 Object
    var wall1 = new Partition(wall1Width, wall1Height);
    var wall1Area = wall1.area(wall1.width, wall1.height);

    //? Wall 2
    // * Get Wall 2  Width 
    var wall2Width = $("#wall2Width").val();

    //* Get Wall 1 Height 
    var wall2Height = $("#wall2Height").val();

    //* Create wall2 Object
    var wall2 = new Partition(wall2Width, wall2Height);
    var wall2Area = wall2.area(wall2.width, wall2.height);

    //? Wall 3
    // * Get Wall 3  Width 
    var wall3Width = $("#wall3Width").val();

    //* Get Wall 1 Height 
    var wall3Height = $("#wall3Height").val();

    //* Create wall3 Object
    var wall3 = new Partition(wall3Width, wall3Height);
    var wall3Area = wall3.area(wall3.width, wall3.height);

    //? Wall 4
    // * Get Wall 4  Width 
    var wall4Width = $("#wall4Width").val();

    //* Get Wall 1 Height 
    var wall4Height = $("#wall4Height").val();

    //* Create wall4 Object
    var wall4 = new Partition(wall4Width, wall4Height);
    var wall4Area = wall4.area(wall4.width, wall4.height);

    //* Calculate Total Wall Area
    var totalWallArea = wall1Area + wall2Area + wall3Area + wall4Area;
    console.log("Wall Areas - Total Wall Area: " + totalWallArea, "Wall 1: " + wall1Area, "Wall2: " + wall2Area, " wall3: " + wall3Area, "wall4: " + wall4Area);
    
    //! WINDOW SECTION
    // * Get window Width
    var windowWidth = $(".windowWidth").val();
    //* Get window Height
    var windowHeight = $(".windowHeight").val();

    //* Create window Object
    var window = new Partition(windowWidth, windowHeight);

    var windowArea = window.area(window.width, window.height);
    console.log("Yeah I called her area");
    console.log("I am window from the constructor: " + "Width: " + window.width, "Height: " + window.height, "Area:" + windowArea);

    //! DOOR SECTION
    // * Get door Width
    var doorWidth = $(".doorWidth").val();
    //* Get door Height
    var doorHeight = $(".doorHeight").val();

    //* Create door Object
    var door = new Partition(doorWidth, doorHeight);

    var doorArea = door.area(door.width, door.height);

    //! EXTRA SPACE
    // * Get extraSpace Width
    var extraSpaceWidth = $(".extraSpaceWidth").val();
    //* Get extraSpace Height
    var extraSpaceHeight = $(".extraSpaceHeight").val();

    //* Create extraSpace Object
    var extraSpace = new Partition(extraSpaceWidth, extraSpaceHeight);

    var extraSpaceArea = extraSpace.area(extraSpace.width, extraSpace.height);

    //TODO: Calculate the grand total area to be substracted i.e doors, windows and the extra space

    var grandTotalArea = windowArea + doorArea + extraSpaceArea;
    console.log("Grand Total Area: " + grandTotalArea);

    //TODO: Get the area to be painted/covered with wallpaper i.e area of the walls - grand total area

    var paintWallArea = totalWallArea - grandTotalArea;
    console.log("I am the paintWall area: " + paintWallArea);

    //TODO: Calculate rolls of wallpaper based on the unit area of the wall paper

    //TODO: Calculate the amount of paint based on the unit litres per area. 

    //TODO: Have an option to add more walls and windows, doors

    //TODO: Calculate the 10% extra 

    //TODO: Checkout logic and form 

    //TODO: Remove button

    //TODO: 




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
// ? What if the additional space is not rectangular?
//Get total area of additional spaces
//Include 10% wastage
//Calculate total full coverage area  i.e walls + 10 % wastage
//Calculate total area to be excluded i.e windows, doors, additional spaces
//Calculate area to be covered by wallpaper i.e full coverage area - wallpaper area
//Calculate wallpaper area
//Calculate number of wallpaper rolls i.e total area/wallpaper area
//Display area and number of wallpaper rolls
