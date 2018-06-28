var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var tree;
        var buildings = [];
        // Add any variables that will be used by render AND update here:
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'orange');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var circle;
for(var i=0;i<800;i++) {
    circle = draw.circle(10,'black','purple',2);
    circle.x = canvasWidth*Math.random();
    circle.y = groundY*Math.random();
    background.addChild(circle);
}
var moon = draw.bitmap('img/moon.png');
moon.x = 200;
moon.y = 200;
moon.scaleX = -0.6;
moon.scaleY = -0.6;
background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
var buildingHeight = 125;
var building;
for(var i=0;i<100;++i) {
    buildingHeight = Math.floor(Math.random() * 600)
        building = draw.rect(100,buildingHeight,'black','red',2);
        building.x = 90*i;
        building.y = groundY-buildingHeight;
        background.addChild(building);
        buildings.push(building);
}
        
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
tree.x = 250;
tree.y = 250;
background.addChild(tree);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 7;
            if(tree.x < +200) {
    tree.x = canvasWidth;
}
            
            // TODO 5: Part 2 - Parallax
          for(var i =0; i< buildings.length;i++){
              buildings[i].x = buildings[i]. x -1;
              if(buildings[i].x < 0){
                  buildings[i].x = canvasWidth;
              }
          }


        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
