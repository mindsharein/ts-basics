interface ITV {
    picture : number[][];
    make: string;
    model : string;
    

    switchOn() : void;
    switchOff() : void;
    setVolume(level : number) : void;
    displayPicture() : void;
}

class TinyTV implements ITV {
    public picture : number[][];
    public make: string;
    public model: string;

    private volLevel : number = 0;

    constructor(mk: string, mdl :string) {
        this.picture = [[0,1,1,0],[1,1,1,1],[0,0,0,0],[1,1,1,0]];
        this.make = mk;
        this.model = mdl;
    }

    public switchOn() {
        console.log("TV is ON!");
    }

    public switchOff() { 
        console.log("TV is OFF");
    }

    public setVolume(level: number) {
        this.volLevel = level;
        console.log("Audio at level : " + this.volLevel);
    }

    public displayPicture() : void {
        for(let i=0; i < this.picture.length; i++) {
            for(let j=0; j < this.picture[i].length; j++) {
                console.log(`${ this.picture[i][j] == 1 ? '*' : ' ' }`);
            }
        }
    }

}

let mytv : TinyTV = new TinyTV("Weston", "555");

mytv.switchOn();
mytv.setVolume(5);
mytv.displayPicture();