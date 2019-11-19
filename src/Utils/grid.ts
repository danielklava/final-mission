import { Scene } from "phaser";

export default class GridUtils{
    
    static numCols = 12;
    static numRows = 12;

    static positionOnGrid(obj : Phaser.GameObjects.Components.Transform, 
        scene : Phaser.Scene, 
        colX : number, 
        rowY: number): void{
        
        var targetX : number = scene.scale.width / this.numCols * colX;
        var targetY : number = scene.scale.height / this.numRows * rowY;
        
        obj.setPosition(targetX, targetY);
    }

    static colWidth(scene : Phaser.Scene) : number {
        return scene.scale.width / this.numCols;
    }

    static rowHeight(scene : Phaser.Scene) : number {
        return scene.scale.height  / this.numRows;
    }
}