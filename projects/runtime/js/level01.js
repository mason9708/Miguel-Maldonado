var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:500,y:groundY},
                {type: 'sawblade',x:300,y:groundY},
            ]
        };
        window.levelData = levelData;
        
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);
    function createEnemy(x,y) {
    // all code from TODO 12
    var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'orange', 'purple',10);
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -6;
enemy.rotationVelocity = 10;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-15);
enemy.fadeOut();
};
enemy.onProjectileCollision = function() {
    game.increaseScore(100);
    enemy.fadeOut();
}
}
createEnemy(800,groundY-30);
createEnemy(700,groundY-30);
createEnemy(600,groundY-30);
createEnemy(500,groundY-30);
createEnemy(400,groundY-30);
createEnemy(700,groundY-30);
createEnemy(1300,groundY-30);
createEnemy(1100,groundY-30);
createEnemy(900,groundY-30);
createEnemy(1400,groundY-30);
        // BEGIN EDITING YOUR CODE HERE
var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = 400;
myObstacle.y = 400;
game.addGameItem(myObstacle);  
var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
function createSawBlade(x,y) {
    // your code goes here
   
    game.addGameItem(myObstacle);  
obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -x;
obstacleImage.y = -y;
}  
    createSawBlade(100, 50);
    createSawBlade(200, 50);
    createSawBlade(300, 50);
    createSawBlade(400, 50);
    for(var i = 0; i < 5; i++){
        createSawBlade(levelData.gameItems.x, levelData.gameItems.y);
     }
    }
   


};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}