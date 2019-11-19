import BaseComponent from "./BaseComponent";
import Hero from "../Model/Hero";
import HeroCard from "./HeroCard";
import Tile from "../Tile";
import GridUtils from "../../Utils/grid";

export default class HeroesList extends Phaser.GameObjects.Container{

    heroes :  Array<Hero>;
    cards : Array<Tile>;

    constructor(scene : Phaser.Scene, x, y, heroes : Hero[]){
        super(scene, x, y);

        this.heroes = heroes;

        for (let i = 0; i < this.heroes.length; i ++){
            let hero : Hero = this.heroes[i];
            
            let card = new HeroCard(this.scene, 65 * i, 0, 120, 200, hero);
            
            this.add(card);
        };

        scene.add.existing(this);

    }

    update(): void {
        super.update();


    }

}