
BasicGame.Preloader = function (game) {


    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function () {


    },

    create: function () {


    },

    update: function () {


            this.state.start('MainMenu');

    }

};