import { COLORS } from "../Utils/Colors";

export default class Tile extends Phaser.GameObjects.Container{

    normalColor = COLORS.NORMAL;
    hoverColor = 0xa96868;
    shadowColor = COLORS.DARK;

    base : Phaser.GameObjects.Rectangle;
    shadow : Phaser.GameObjects.Rectangle;
    border: Phaser.GameObjects.Rectangle;

    text : Phaser.GameObjects.Text;

    icon : Phaser.GameObjects.Image;

    originalX : number;
    originalY : number;

    callback : Function;

    pressed = false;
    isAnimating = false;

    borderSize = 3;
    shadowDistance = 5;

    constructor (scene : Phaser.Scene, x, y, width, height, content?: string, textureKey? : string, callback? : Function){
        super(scene, x, y)

        this.originalX = x;
        this.originalY = y;

        this.callback = callback;

        this.shadow = scene.add.rectangle(x + this.shadowDistance, y + this.shadowDistance, width, height, this.shadowColor);
        
        this.base = scene.add.rectangle(x, y, width - this.borderSize, height - this.borderSize, this.normalColor);
        this.border = scene.add.rectangle(x, y, width, height, 0x2c2137);
        
        this.text = scene.add.text(this.base.x, this.base.y, "", {fontFamily: '"Press Start 2P"', fontSize: 10, align: 'center'});
        if (content != undefined){
            this.text.text = content;
            this.text.setColor('#45283c');
        }
        
        this.setInteractive(new Phaser.Geom.Rectangle(x - width/2, y-height/2, width,height), Phaser.Geom.Rectangle.Contains);

        this.on('pointerdown', function (pointer) {
            console.log("pointer down");
            this.setPressedDown();
        });    
        this.on('pointerup', function (pointer) {
            console.log("pointer up");
            this.setReleased();
        });
        this.on('pointerover', function (pointer) {
            console.log("pointer over");
            if (this.pressed)
                this.setReleased(true);
        });
        this.on('pointerout', function (pointer) {
            console.log("pointer out");
            if (this.pressed)
                this.setReleased(false);
        });
        
        this.add(this.shadow);
        this.add(this.border);
        this.add(this.base);
        this.add(this.text);

        if (textureKey != undefined){
            this.icon = scene.add.image(this.base.x, this.base.y, textureKey);
            this.add(this.icon);
        }
        
        scene.add.existing(this);


    }

    update(): void{
        if (this.icon != undefined){
            Phaser.Display.Align.In.Center(this.icon, this.base);
        }
        Phaser.Display.Align.In.TopCenter(this.text, this.base);  
        this.text.setPosition(this.text.x, this.text.y + 10);
    }

    setPressedDown(): void {
        this.pressed = true;
        this.base.setFillStyle(this.normalColor);
        this.border.setPosition(this.base.x, this.base.y);
        
        if (this.icon != undefined){
            this.icon.setPosition(this.base.x, this.base.y);
        }

        this.scene.tweens.killTweensOf(this);
    
        this.scene.tweens.add({
            targets: [this.base, this.border],
            x : this.base.x + this.shadowDistance,
            y : this.base.y + this.shadowDistance,
            duration : 150,
            ease : 'Power2',
            onComplete: ()=>{
            }
        })

    }

    setReleased(triggerCallback : boolean): void{
        this.pressed = false;
        this.base.setFillStyle(this.normalColor);

        if (this.icon)
            this.icon.setPosition(this.base.x, this.base.y);

        this.scene.tweens.killTweensOf(this);

        this.scene.tweens.add({
            targets: [this.base, this.border],
            x : this.originalX,
            y : this.originalY,
            duration : 150,
            ease : 'Power2',
            onComplete : () => {
                if (this.callback && triggerCallback != false)
                    this.callback();
            }
        })
    }

}
