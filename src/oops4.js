var TinyTV = /** @class */ (function () {
    function TinyTV(mk, mdl) {
        this.volLevel = 0;
        this.picture = [[0, 1, 1, 0], [1, 1, 1, 1], [0, 0, 0, 0], [1, 1, 1, 0]];
        this.make = mk;
        this.model = mdl;
    }
    TinyTV.prototype.switchOn = function () {
        console.log("TV is ON!");
    };
    TinyTV.prototype.switchOff = function () {
        console.log("TV is OFF");
    };
    TinyTV.prototype.setVolume = function (level) {
        this.volLevel = level;
    };
    TinyTV.prototype.displayPicture = function () {
        for (var i = 0; i < this.picture.length; i++) {
            for (var j = 0; j < this.picture[i].length; j++) {
                console.log("" + (this.picture[i][j] == 1 ? '*' : ' '));
            }
        }
    };
    return TinyTV;
}());
var mytv = new TinyTV("Weston", "555");
mytv.switchOn();
mytv.setVolume(5);
mytv.displayPicture();
