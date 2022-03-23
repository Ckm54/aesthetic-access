$(document).ready(function () {
  $(".anotherWall").hide();

  $(".addButton").click(function () {
    $(".anotherWall").show();
  })

  $("#wallPaperCalculator").submit(function (event) {
    function calculateArea(width, height) {
      var calculatedArea = width * height;
      console.log(`I have been called at the function level. The Area is: ${calculatedArea}`);
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
    // * Get Wall Width
    var wallWidth = $(".wallWidth").val();

    console.log("I am total wall width called outside the function: " + wallWidth)
    //* Get Wall Height
    var wallHeight = $(".wallHeight").val();

    //* Create Wall Object
    var wall = new Partition(wallWidth, wallHeight);
    var wallArea = wall.area(wall.width, wall.height);
    //TODO: create another wall object
    
    var anotherWallWidth = $(".anotherWallWidth").val();

    var anotherWallHeight = $(".anotherWallHeight").val();

    var newWall = new Partition(anotherWallWidth, anotherWallHeight);

    console.log("I am the new wall inside addbutton function width:" + newWall.width,  "height: " + newWall.height);
    var anotherWallArea = newWall.area(newWall.width, newWall.height);
    console.log("Another wall area: " + anotherWallArea);

    //  console.log("Yeah I called her area");
    // console.log("I am wall from the constructor: " + "Width: " + wall.width, "Height: " + wall.height, "Area:" + wallArea);
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
    // console.log("Yeah I called her area");
    // console.log("I am door from the constructor: " + "Width: " + door.width, "Height: " + door.height, "Area:" + doorArea);

    //! EXTRA SPACE
    // * Get extraSpace Width
    var extraSpaceWidth = $(".extraSpaceWidth").val();
    //* Get extraSpace Height
    var extraSpaceHeight = $(".extraSpaceHeight").val();

    //* Create extraSpace Object
    var extraSpace = new Partition(extraSpaceWidth, extraSpaceHeight);

    var extraSpaceArea = extraSpace.area(extraSpace.width, extraSpace.height);
    // console.log("Yeah I called her area");
    // console.log("I am extraSpace from the constructor: " + "Width: " + extraSpace.width, "Height: " + extraSpace.height, "Area:" + extraSpaceArea);

    //TODO: Calculate the grand total area to be substracted i.e doors, windows and the extra space

    var grandTotalArea = windowArea + doorArea + extraSpaceArea;
    console.log("Grand Total Area: " + grandTotalArea);

    //TODO: Get the area to be painted/covered with wallpaper i.e area of the walls - grand total area

    var paintWallArea = wallArea - grandTotalArea;
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
