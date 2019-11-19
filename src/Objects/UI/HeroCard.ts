import BaseComponent from "./BaseComponent";
import Hero from "../Model/Hero";

export default class HeroCard extends Phaser.GameObjects.Container{

    base : Phaser.GameObjects.Rectangle;
    heroName : Phaser.GameObjects.Text;
    codename : Phaser.GameObjects.Text;

    constructor (scene:Phaser.Scene, x, y, width, height, hero : Hero){
        super(scene, x, y);

        console.log(hero);
        this.heroName = scene.add.text(x, y, "");
    }

    update() : void {

    }
}