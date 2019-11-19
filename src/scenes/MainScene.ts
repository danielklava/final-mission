import Tile from '../Objects/Tile';
import GridUtils from '../Utils/grid';

export default class MainScene extends Phaser.Scene{

    private tile1 : Tile;
    private tile2 : Tile;
    private tile3 : Tile;
    private tileExit : Tile;

    constructor(){
        super({ key : 'MainScene' })
    }

    preload(): void{
        this.load.image("missions-icon", 'assets/textures/missions.png');
        this.load.image("base-icon", 'assets/textures/base.png');
        this.load.image("squad-icon", 'assets/textures/squad.png');
    }   

    create (): void{
        this.tile1 = new Tile(this, 
            GridUtils.colWidth(this) * 1.5, 
            GridUtils.rowHeight(this) * 3, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 6,
            "Base", "base-icon");

        this.tile2 = new Tile(this, 
            GridUtils.colWidth(this) * 3, 
            GridUtils.rowHeight(this)  * 3, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 6,
            "Missions", "missions-icon");

        this.tile3 = new Tile(this, 
            GridUtils.colWidth(this) * 4.5, 
            GridUtils.rowHeight(this) * 3, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 6,
            "Squad", "squad-icon", () => { 
                this.scene.start('SquadScene');
            });

        this.tileExit = new Tile(this, 
            GridUtils.colWidth(this) * 5.5, 
            GridUtils.rowHeight(this) * 5.5, 
            GridUtils.colWidth(this) * 1.5, 
            GridUtils.rowHeight(this) * 1,
            "Exit", null, () => { 
                this.scene.start('StartScene');
            });

    }

    update(): void{
        this.tile1.update();
        this.tile2.update();
        this.tile3.update();
        this.tileExit.update();

    }

}