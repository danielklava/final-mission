import Tile from '../Objects/Tile';
import GridUtils from '../Utils/grid';

export default class StartScene extends Phaser.Scene{

    private tile1 : Tile;
    private tile2 : Tile;
    private tile3 : Tile;

    constructor(){
        super({ key : 'StartScene' })
    }

    preload(): void{
    }   

    create (): void{
        this.tile1 = new Tile(this, 
            GridUtils.colWidth(this) * 3, 
            GridUtils.rowHeight(this) * 3, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 1.5,
            "Start Game",  null, () => { 
                this.scene.get('MainScene').scene.start();
                this.scene.setVisible(false);
                this.scene.bringToTop('MainScene');
            });

        this.tile2 = new Tile(this, 
            GridUtils.colWidth(this) * 3, 
            GridUtils.rowHeight(this)  * 4, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 1.5,
            "Options");

        this.tile3 = new Tile(this, 
            GridUtils.colWidth(this) * 3, 
            GridUtils.rowHeight(this) * 5, 
            GridUtils.colWidth(this) * 2.5, 
            GridUtils.rowHeight(this) * 1.5,
            "Credits");


    }

    update(): void{
        this.tile1.update();
        this.tile2.update();
        this.tile3.update();

    }

}