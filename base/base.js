//this sets up the game where the size is 400 width and 300 height, name of the game phaser-base
var game = new Phaser.Game(400, 300, Phaser.AUTO, 'phaser_base', {

    //for Phaser to run a file it has to contain at least one of these functions

    //preload is used at the start to load assets and thins
    preload: function(){},

    //create makes the game world and calls things into it
    create: function () {},

    //runs 60 times a second and is where the interactive stuff is
    update: function(){}

});