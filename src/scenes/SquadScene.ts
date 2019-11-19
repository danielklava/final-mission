import Tile from "../Objects/Tile";
import GridUtils from "../Utils/grid";
import HeroesList from "../Objects/UI/HeroesList";

export default class SquadScene extends Phaser.Scene{
    
    private tileExit : Tile;

    private listHeroes : HeroesList;
    
    constructor(){
        super({ key : 'SquadScene' })
    }

    preload() : void {
        this.load.json("heroes", "assets/data/heroes.json");
    }

    create(): void{
        
        this.tileExit = new Tile(this, 
            GridUtils.colWidth(this) * .5, 
            GridUtils.rowHeight(this) * .5, 
            GridUtils.colWidth(this) * 1.5, 
            GridUtils.rowHeight(this) * 1,
            "Back", null,  () => { 
                this.scene.start('MainScene');
            });

        let data = this.cache.json.get("heroes");

        this.listHeroes = new HeroesList(this, 100, 170, data.heroes);

        this.add.existing(this.listHeroes);
    }

    
    update(): void{
        this.tileExit.update();
        this.listHeroes.update();
    }
}