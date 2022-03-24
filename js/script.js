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
      var wall1Width = parseFloat($("#wall1Width").val());
  
      //* Get Wall 1 Height 
      var wall1Height = parseFloat($("#wall1Height").val());
  
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
      console.log("PaintWall area: " + paintWallArea);
  
      //TODO: Calculate rolls of wallpaper based on the unit area of the wall paper
      let unitWallPaperArea = 4;
      var wallPaperRolls = paintWallArea / unitWallPaperArea;
      wallPaperRolls = Math.round(wallPaperRolls);
      alert(`The total area to be covered by the Wall paper is ${paintWallArea} square metres. You will need ${wallPaperRolls} wallpaper rolls`);
      console.log("wallPaperRolls:" + wallPaperRolls)
  
      //TODO: Calculate the amount of paint based on the unit litres per area. 
      let unitPaintArea = 8;
      var paintAmount = paintWallArea / unitPaintArea;
      paintAmount = Math.round(paintAmount);
      alert(`The total area to be painted is ${paintWallArea} square metres. You will need ${paintAmount} litres of paint`);
      console.log("Paint Amount: " + paintAmount);
  
      //TODO: Have an option to add more walls and windows, doors- 
      //TODO:Maybe in future or @Collo can help. I don't have the dedication to do that now. I'm exhausted.
  
  
      //TODO: Calculate the 10% extra 
      var tenPercentExtraWallPaper = 1.1 * wallPaperRolls;
  
      var tenPercentExtraPaint = 1.1 * paintAmount;
      //TODO: Checkout logic and form 
  
      this.reset();
      event.preventDefault();
    })
  })
  
  