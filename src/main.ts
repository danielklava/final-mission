import * as Phaser from 'phaser';
import MainScene from './scenes/MainScene';
import SquadScene from './scenes/SquadScene';
import StartScene from './scenes/StartScene';

const gameConfig : Phaser.Types.Core.GameConfig = {
    title : 'Proto',
    type: Phaser.AUTO,
    render : {
        pixelArt : true,
        antialias : false
    },
    scale : {
        width : 640,
        height : 360
    },
    physics: {
        default : 'arcade',
        arcade : {
            debug : true
        }
    },  
    parent : 'game',
    backgroundColor: '#eec39a',
    scene : [
        SquadScene,
        StartScene,
        MainScene,
    ]
}

export const Game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () =>{
    Game.scale.refresh();
})