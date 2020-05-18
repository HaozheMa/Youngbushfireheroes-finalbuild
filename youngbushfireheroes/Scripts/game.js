
var dia1;
var dia2;
var dia3;
var diahow;
var diacorrect;
var diawrong2;
var diawrong;
var can;
var egg;
var paper;
var text;
var recycle;
var regular;
var wait;
var timedEvent;
var clearTrigger = 0;
var startTitle;
var game1;
var game2;
var game3;
var game4;
var endrecycle;
var yesp;
var letstry;
var helpu;
//main scene: choose game
var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneA() {
            Phaser.Scene.call(this, { key: 'sceneA' });
        },

    preload: function () {
        this.load.image('background', '../assets/game/Backyard.png');
        this.load.image('chooseGame', '../assets/game/start.png');
        this.load.image('birdBoxGame', '../assets/game/choose game button/choose - birdbox.png');
        this.load.image('plantGame', '../assets/game/choose game button/choose - plant tree.png');
        this.load.image('recycleGame', '../assets/game/choose game button/choose - recycling.png');
        this.load.image('waterBowlgame', '../assets/game/choose game button/choose - waterbowl.png');

    },

    create: function () {
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        startTitle = this.add.image(450, 100, 'chooseGame');
        startTitle.setScale(0.3);
        game1 = this.add.image(250, 220, 'recycleGame').setInteractive();
        game1.setScale(0.25);
        game2 = this.add.image(650, 220, 'plantGame').setInteractive();
        game2.setScale(0.25);
       /* game3 = this.add.image(250, 400, 'waterBowlgame').setInteractive();
        game3.setScale(0.25);
        game4 = this.add.image(650, 400, 'birdBoxGame').setInteractive();
        game4.setScale(0.25);*/
        game1.once('pointerup', function () {
            this.scene.start('sceneB');
        }, this);
        game2.once('pointerup', function () {
            this.scene.start('sceneC');
        }, this);
       /* game3.once('pointerup', function () {
            this.scene.start('sceneD');
        }, this);
        game4.once('pointerup', function () {
            this.scene.start('sceneE');
        }, this);*/
    },


});

//first game scene: recycle game
var SceneB = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneB() {
            Phaser.Scene.call(this, { key: 'sceneB' });
        },

    preload: function () {
        this.load.image('background', '../assets/game/Backyard.png');
        this.load.image('child', "../assets/game/Boy.png")
        this.load.image('dialog1', '../assets/game/Dialog 1.png');
        this.load.image('dialog2', '../assets/game/Dialog 2.png');
        this.load.image('dialog3', '../assets/game/Dialog 3.png');
        this.load.image('how', '../assets/game/Prompt dialog 1.png');
        this.load.image('correct', "../assets/game/Dialog correct selection.png")
        this.load.image('incorrect', "../assets/game/Dialog wrong selection.png")
        this.load.image('incorrect2', "../assets/game/Recycle game/Images/incorrect2.png");
        this.load.image('recyclebin', '../assets/game/Recycle trash bin.png');
        this.load.image('regularbin', '../assets/game/Regular trash bin.png');
        this.load.image('can', '../assets/game/Can.png');
        this.load.image('egg', '../assets/game/Egg.png');
        this.load.image('paper', '../assets/game/Paper.png');
        this.load.image('endrecycle', '../assets/game/thank you for helping.png');
        this.load.image('tryother', '../assets/game/try another game.png');
        this.load.image('yes', '../assets/game/preamble - “Yes”.png');
        this.load.image('letstry', '../assets/game/let_s try.png');
        this.load.image('helpu', '../assets/game/let me help you.png');

    },

    create: function () {
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child').setInteractive();
        dia1 = this.add.image(400, 150, 'dialog1').setInteractive();
        dia1.setScale(0.6);
        yesp = this.add.image(700, 400, 'yes').setInteractive();
        yesp.setScale(0.5);
        yesp.once('pointerup', dia2show, this);
        diacorrect = this.add.image(300, 100, 'correct');
        diacorrect.setScale(0.4);
        diacorrect.setActive(false).setVisible(false);
        diawrong = this.add.image(300, 100, 'incorrect');
        diawrong.setScale(0.4);
        diawrong.setActive(false).setVisible(false);
        diawrong2 = this.add.image(300, 100, 'incorrect2')
        diawrong2.setScale(0.4);
        diawrong2.setActive(false).setVisible(false);
        this.input.dragDistanceThreshold = 16;

        this.input.on('dragstart', function (pointer, gameObject) {

            gameObject.setTint(0xff0000);

        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
            if (ckeckRecycle(gameObject)) {
                if (isRecycle(gameObject)) {

                    diacorrect.setActive(true).setVisible(true);
                    gameObject.setActive(false).setVisible(false);
                    clearTrigger++;
                    timedEvent = this.time.addEvent({ delay: 2000, callback: diaDestroy, callbackScope: this });
                } else {
                    diawrong.setActive(true).setVisible(true);
                    timedEvent = this.time.addEvent({ delay: 2000, callback: diaDestroy, callbackScope: this });
                }
            }
            else if (ckeckRegular(gameObject)) {
                if (!isRecycle(gameObject)) {

                    diacorrect.setActive(true).setVisible(true);
                    gameObject.setActive(false).setVisible(false);
                    clearTrigger++;
                    timedEvent = this.time.addEvent({ delay: 2000, callback: diaDestroy, callbackScope: this });
                } else {
                    diawrong2.setActive(true).setVisible(true);
                    timedEvent = this.time.addEvent({ delay: 2000, callback: diaDestroy, callbackScope: this });
                }
            }
            else {

                if (gameObject.name == "can") {
                    gameObject.x = 500;
                    gameObject.y = 450;
                } else if (gameObject.name == "egg") {
                    gameObject.x = 550;
                    gameObject.y = 400;
                } else if (gameObject.name == "paper") {
                    gameObject.x = 750;
                    gameObject.y = 400;
                }
            }

        }, this);

    },

    update: function () {
        if (clearTrigger == 3) {
            recycle.setActive(false).setVisible(false);
            regular.setActive(false).setVisible(false);
            endrecycle = this.add.image(400, 150, 'endrecycle');
            endrecycle.setScale(0.7);
            var tryother = this.add.image(700, 400, 'tryother').setInteractive();
            tryother.setScale(0.4);
            tryother.once('pointerup', function () {
                clearTrigger == 0;
                this.scene.restart();
                this.scene.start('sceneA');
            }, this);
        }
    }
});

function dia2show() {
    dia1.destroy();
    yesp.destroy();

    recycle = this.add.image(300, 300, 'recyclebin').setInteractive();
    recycle.setScale(0.5);
    regular = this.add.sprite(500, 300, 'regularbin').setInteractive();
    regular.setScale(0.5);
    can = this.physics.add.sprite(500, 450, "can").setInteractive();
    can.name = "can";
    can.setScale(0.5);
    paper = this.physics.add.sprite(750, 400, "paper").setInteractive();
    paper.setScale(0.5);
    paper.name = "paper";
    egg = this.physics.add.sprite(550, 400, "egg").setInteractive();
    egg.setScale(0.5);
    egg.name = "egg";
    dia2 = this.add.image(400, 150, 'dialog2').setInteractive();
    dia2.setScale(0.6);
    letstry = this.add.image(700, 400, 'letstry').setInteractive();
    letstry.setScale(0.4);
    letstry.once('pointerup', dia3show, this);
}

function dia3show() {
    dia2.destroy();
    letstry.destroy();
    dia3 = this.add.image(400, 100, 'dialog3').setInteractive();
    dia3.setScale(0.6);
    helpu = this.add.image(700, 400, 'helpu').setInteractive();
    helpu.setScale(0.5);
    helpu.once('pointerup', diaHowshow, this);
}


function diaHowshow() {
    dia3.destroy();
    helpu.destroy();
    diahow = this.add.image(500, 150, 'how').setInteractive();
    diahow.setScale(0.6);
    letstry = this.add.image(700, 400, 'letstry').setInteractive();
    letstry.setScale(0.4);
    letstry.once('pointerup', gamestart, this);
}
function gamestart() {
    diahow.destroy();
    letstry.destroy();
    this.input.setDraggable(can);
    this.input.setDraggable(paper);
    this.input.setDraggable(egg);

}

function ckeckRegular(gameObject) {
    if (gameObject.x < 550 && gameObject.x > 420) {
        if (gameObject.y < 400 && gameObject.y > 200) {
            return true;
        }
    }
}
function ckeckRecycle(gameObject) {
    if (gameObject.x < 370 && gameObject.x > 200) {
        if (gameObject.y < 400 && gameObject.y > 200) {
            return true;
        }
    }
}

function isRecycle(gameObject) {
    if (gameObject.name == "can" || gameObject.name == "paper") {
        return true;
    }
    return false;
}

function diaDestroy() {

    diacorrect.setActive(false).setVisible(false);
    diawrong.setActive(false).setVisible(false);
    diawrong2.setActive(false).setVisible(false);
}


var cDia1;
var cDia2;
var cDia3;
var cDia4;
var cDia5;
var cDia6;
var cDia7;
var cDia8;
var cDia9;
var cDia14;
var cDia13;
var cNext;
var checkNext = 0;
var native;
var nonnative;
var plantall;
var sbackground;
var tree1;
var tree2;
var tree3;
var tree4;
var cTry;
var cbox;
var suitableHint;
var confirmButton;
var tryAgain;
var destroyConfirm = false;
//second game scene: plant tree game
var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneB() {
            Phaser.Scene.call(this, { key: 'sceneC' });
        },

    preload: function () {
        this.load.image('background', '../assets/game/Backyard.png');
        this.load.image('child', "../assets/game/Boy.png");
        this.load.image('cDia1', '../assets/game/plant tree game/game image/dialog 1.png');
        this.load.image('cDia2', '../assets/game/plant tree game/game image/dialog 2.png');
        this.load.image('cDia3', '../assets/game/plant tree game/game image/dialog 3.png');
        this.load.image('cDia4', '../assets/game/plant tree game/game image/dialog 4.png');
        this.load.image('cDia5', '../assets/game/plant tree game/game image/dialog 5.png');
        this.load.image('cDia6', '../assets/game/plant tree game/game image/dialog 6.png');
        this.load.image('cDia7', '../assets/game/plant tree game/game image/dialog 7.png');
        this.load.image('cDia8', '../assets/game/plant tree game/game image/dialog 8.png');
        this.load.image('cDia9', '../assets/game/plant tree game/game image/dialog 9.png');
        this.load.image('cDia13', '../assets/game/plant tree game/game image/dialog 13.png');
        this.load.image('cDia14', '../assets/game/plant tree game/game image/dialog 14.png');
        this.load.image('next', '../assets/game/plant tree game/game image/next.png');
        this.load.image('native', '../assets/game/plant tree game/game image/native tree.png');
        this.load.image('Nonnative', '../assets/game/plant tree game/game image/Non-native tree.png');
        this.load.image('Plantall', '../assets/game/plant tree game/game image/Plant them all.png');
        this.load.image('wrongreason', '../assets/game/plant tree game/game image/reason 5 6.png');
        this.load.image('restart', '../assets/game/plant tree game/game image/Picture1.png');
        this.load.image('sbackground', '../assets/game/plant tree game/game image/sapling background.png');
        this.load.image('tree', '../assets/game/plant tree game/game image/sapling.png');
        this.load.image('slist', '../assets/game/plant tree game/game image/sapling list.png');
        this.load.image('letstry', '../assets/game/plant tree game/game image/let_s try.png');
        this.load.image('box', '../assets/game/plant tree game/game image/sapling drag list 10.png');
        this.load.image('notsuit', '../assets/game/plant tree game/game image/not suitable place.png');
        this.load.image('confirm', '../assets/game/plant tree game/game image/confirm.png');
        this.load.image('tryAgain', '../assets/game/plant tree game/game image/Reset and try again.png');
        this.load.image('otherGame', '../assets/game/plant tree game/game image/try another game.png');

    },
    create: function () {
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child');
        cDia1 = this.add.image(400, 150, 'cDia1');
        cDia1.setScale(0.6);
        cNext = this.add.image(700, 400, 'next').setInteractive();
        cNext.setScale(0.5);
        cNext.once('pointerup', c2Sence, this);

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);

        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', function (pointer, gameObject) {
            if (isInyard(gameObject)) {
                gameObject.clearTint();
            } else {
                suitableHint = this.add.image(450, 300, 'notsuit');
                suitableHint.setScale(0.5);
                tryAgain = this.add.image(450, 350, 'tryAgain').setInteractive();
                tryAgain.setScale(0.4);
                tryAgain.once('pointerup', clearTree, this);
            }
        }, this);

    },
    update: function () {
        if (tree1 != null) {
            if (isInyard(tree1) && isInyard(tree2) && isInyard(tree3) && isInyard(tree4)) {
                cbox.destroy();
                if (destroyConfirm) {
                    confirmButton.destroy();
                } else {
                    confirmButton = this.add.image(730, 450, 'confirm').setInteractive();
                    confirmButton.setScale(0.4);
                    confirmButton.once('pointerup', endPlant, this);
                }

            }

        }
        if (destroyConfirm) {
            confirmButton.destroy();
        }


    }
});

function c2Sence() {
    cDia1.destroy();
    cNext.destroy();
    cDia2 = this.add.image(400, 150, 'cDia2');
    cDia2.setScale(0.6);
    cNext = this.add.image(700, 400, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', c3Sence, this);
}


function c3Sence() {
    cDia2.destroy();
    cNext.destroy();
    cDia3 = this.add.image(400, 150, 'cDia4');
    cDia3.setScale(0.6);
    native = this.add.image(750, 200, 'native').setInteractive();
    native.setScale(0.4);
    nonnative = this.add.image(750, 320, 'Nonnative').setInteractive();
    nonnative.setScale(0.4);
    plantall = this.add.image(750, 440, 'Plantall').setInteractive();
    plantall.setScale(0.4);
    native.once('pointerup', nativeChoice, this);
    nonnative.once('pointerup', wrongChoice, this);
    plantall.once('pointerup', wrongChoice, this);
}

function nativeChoice() {
    cDia3.destroy();
    native.destroy();
    nonnative.destroy();
    plantall.destroy();
    cDia7 = this.add.image(400, 150, 'cDia7');
    cDia7.setScale(0.5);
    cNext = this.add.image(700, 400, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', cNextPhase, this);
}

function wrongChoice() {
    cDia3.destroy();
    native.destroy();
    nonnative.destroy();
    plantall.destroy();
    cDia5 = this.add.image(300, 150, 'cDia5');
    cDia5.setScale(0.4);
    var wrReason = this.add.image(650, 200, 'wrongreason');
    wrReason.setScale(0.5);
    var restart = this.add.image(700, 400, 'restart').setInteractive();
    restart.setScale(0.5);
    restart.once('pointerup', function () {
        this.scene.restart();
    }, this);
}

function cNextPhase() {
    cDia7.destroy();
    cNext.destroy();
    cDia8 = this.add.image(200, 100, 'cDia8');
    cDia8.setScale(0.4);
    sbackground = this.add.image(500, 250, 'slist');
    sbackground.setScale(0.5);
    cNext = this.add.image(730, 450, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', preplantGame, this);
}

function preplantGame() {
    cDia8.destroy();
    cNext.destroy();
    cDia9 = this.add.image(200, 100, 'cDia9');
    cDia9.setScale(0.4);
    cTry = this.add.image(730, 450, 'letstry').setInteractive();
    cTry.setScale(0.5);
    cTry.once('pointerup', plantGame, this);
}

function plantGame() {
    cDia9.destroy();
    cTry.destroy();
    sbackground.destroy();
    cbox = this.add.image(700, 130, 'box');
    cbox.setScale(0.5);
    tree1 = this.add.image(600, 150, 'tree').setInteractive();;    tree1.setScale(0.08);    tree2 = this.add.image(670, 150, 'tree').setInteractive();;    tree2.setScale(0.08);    tree3 = this.add.image(740, 150, 'tree').setInteractive();;    tree3.setScale(0.08);    tree4 = this.add.image(810, 150, 'tree').setInteractive();;    tree4.setScale(0.08);
    destroyConfirm = false;
    this.input.setDraggable(tree1);
    this.input.setDraggable(tree2);
    this.input.setDraggable(tree3);
    this.input.setDraggable(tree4);
}

function clearTree() {
    tree1.destroy();
    tree2.destroy();
    tree3.destroy();
    tree4.destroy();
    suitableHint.destroy();
    tryAgain.destroy();
    cbox.destroy();
    cbox = this.add.image(700, 130, 'box');
    cbox.setScale(0.5);
    tree1 = this.add.image(600, 150, 'tree').setInteractive();;    tree1.setScale(0.08);    tree2 = this.add.image(670, 150, 'tree').setInteractive();;    tree2.setScale(0.08);    tree3 = this.add.image(740, 150, 'tree').setInteractive();;    tree3.setScale(0.08);    tree4 = this.add.image(810, 150, 'tree').setInteractive();;    tree4.setScale(0.08);
    this.input.setDraggable(tree1);
    this.input.setDraggable(tree2);
    this.input.setDraggable(tree3);
    this.input.setDraggable(tree4);
}

function isInyard(gameObject) {
    if (gameObject.y >= 250) {
        return true;
    }
    return false;
}

function endPlant() {
    destroyConfirm = true;
    confirmButton.setActive(false).setVisible(false);
    cDia13 = this.add.image(400, 150, 'cDia13');
    cDia13.setScale(0.5);
    cNext = this.add.image(730, 450, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', thankPlant, this);
}

function thankPlant() {
    cDia13.destroy();
    cNext.destroy();
    cDia14 = this.add.image(400, 150, 'cDia14');
    cDia14.setScale(0.5);
    var otherGame = this.add.image(730, 450, 'otherGame').setInteractive();
    otherGame.setScale(0.5);
    otherGame.once('pointerup', function () {
        this.scene.start('sceneA');
    }, this);
}

// third game scene: water bowl game
var SceneD = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneB() {
            Phaser.Scene.call(this, { key: 'sceneD' });
        },

    preload: function () {
        this.load.image('background', '../assets/game/waterbowl game/image of waterbowl game/background pic.png');
        this.load.image('child', "../assets/game/Boy.png");
        this.load.image('dDia1', '../assets/game/waterbowl game/image of waterbowl game/dialog 1.png');
        this.load.image('dDia2', '../assets/game/waterbowl game/image of waterbowl game/dialog 2.png');
        this.load.image('dDia3', '../assets/game/waterbowl game/image of waterbowl game/dialog 3.png');
        this.load.image('dDia4', '../assets/game/waterbowl game/image of waterbowl game/dialog 4.png');
        this.load.image('dDia5', '../assets/game/waterbowl game/image of waterbowl game/dialog 5.png');
        this.load.image('dDia6', '../assets/game/waterbowl game/image of waterbowl game/dialog 6.png');
        this.load.image('dDia7', '../assets/game/waterbowl game/image of waterbowl game/dialog 7.png');
        this.load.image('dDia8', '../assets/game/waterbowl game/image of waterbowl game/dialog 8.png');
        this.load.image('dDia9', '../assets/game/waterbowl game/image of waterbowl game/dialog 9.png');
        this.load.image('dDia10', '../assets/game/waterbowl game/image of waterbowl game/dialog 10.png');
        this.load.image('dDia11', '../assets/game/waterbowl game/image of waterbowl game/dialog 11.png');
        this.load.image('dDia14', '../assets/game/waterbowl game/image of waterbowl game/dialog 14.png');
        this.load.image('dDia15', '../assets/game/waterbowl game/image of waterbowl game/dialog 15.png');
    },
    create: function () {
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child').setInteractive();
    },
    update: function () {
    }
});



// forth game scene: bird box game
var SceneE = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneB() {
            Phaser.Scene.call(this, { key: 'sceneE' });
        },

    preload: function () {
        this.load.image('background', '../assets/game/Backyard.png');
        this.load.image('child', "../assets/game/Boy.png")
    },
    create: function () {
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child').setInteractive();
    },
    update: function () {
    }
});


var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 900,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0
        }
    },
    scene: [SceneA, SceneB, SceneC, SceneD, SceneE]
};

var game = new Phaser.Game(config);



