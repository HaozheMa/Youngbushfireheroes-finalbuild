
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
var playMis = true;
var bgmusic;
var glass;
var bag;
var banana;
var diaAudio;
//main scene: choose game
var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneA() {
            Phaser.Scene.call(this, { key: 'sceneA' });
        },

    preload: function () {
        //loader, shows the process bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(280, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 150,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(290, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        //load necessary asserts
        this.load.audio('mic', '../assets/background.mp3');
        this.load.image('background', '../assets/game/Backyard.png');
        this.load.image('chooseGame', '../assets/game/start.png');
        this.load.image('birdBoxGame', '../assets/game/choose game button/choose - birdbox.png');
        this.load.image('plantGame', '../assets/game/choose game button/choose - plant tree.png');
        this.load.image('recycleGame', '../assets/game/choose game button/choose - recycling.png');
        this.load.image('waterBowlgame', '../assets/game/choose game button/choose - waterbowl.png');

    },

    create: function () {
        //background music
        if (playMis) {
            bgmusic = this.sound.add('mic');

            bgmusic.play({
                loop: true
            });
            bgmusic.setVolume(0.4);
            playMis = false;
        }
        // add necessary picture to this scene
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        startTitle = this.add.image(450, 100, 'chooseGame');
        startTitle.setScale(0.3);
        game1 = this.add.image(250, 220, 'recycleGame').setInteractive();
        game1.setScale(0.25);
        game2 = this.add.image(650, 220, 'plantGame').setInteractive();
        game2.setScale(0.25);
        game3 = this.add.image(250, 400, 'waterBowlgame').setInteractive();
        game3.setScale(0.25);
        game4 = this.add.image(650, 400, 'birdBoxGame').setInteractive();
        game4.setScale(0.25);
        //press different button to different scene
        game1.once('pointerup', function () {
            this.scene.start('sceneB');
        }, this);
        game2.once('pointerup', function () {
            this.scene.start('sceneC');
        }, this);
        game3.once('pointerup', function () {
            this.scene.start('sceneD');
        }, this);
        game4.once('pointerup', function () {
            this.scene.start('sceneE');
        }, this);
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
        // loader, show the process bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(280, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 150,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(290, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        //load necessary assarts.
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
        this.load.image('Glass', '../assets/game/Recycle game/Images/Glass.png');
        this.load.image('bag', '../assets/game/Recycle game/Images/Plastic bag.png');
        this.load.image('banana', '../assets/game/Recycle game/Images/Banana peel.png');
        this.load.image('endrecycle', '../assets/game/thank you for helping.png');
        this.load.image('tryother', '../assets/game/try another game.png');
        this.load.image('yes', '../assets/game/preamble - “Yes”.png');
        this.load.image('letstry', '../assets/game/let_s try.png');
        this.load.image('helpu', '../assets/game/let me help you.png');
        this.load.audio('bAudio1', '../Audio/game/recycle/d1.wav');
        this.load.audio('bAudio2', '../Audio/game/recycle/d2.wav');
        this.load.audio('bAudio3', '../Audio/game/recycle/d3.wav');
        this.load.audio('bAduio14', '../Audio/game/plant tree/d14.wav');

    },

    create: function () {
        //insert necessary image.
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child').setInteractive();
        dia1 = this.add.image(400, 150, 'dialog1').setInteractive();
        dia1.setScale(0.6); 
        diaAudio = this.sound.add('bAudio1');
        diaAudio.play();
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
        //when drag the item, the item be red.
        this.input.on('dragstart', function (pointer, gameObject) { 
            gameObject.setTint(0xff0000); 
        });
        // when drag the item, record and change the x, y 
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        // when the drag stop, check if it is correct, preform different functions.
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


        }, this);

    },
    // update functions to check if all item are in the correct bin, and end the game
    update: function () {
        if (clearTrigger == 6) {
            diahow.destroy();
            
            recycle.setActive(false).setVisible(false);
            regular.setActive(false).setVisible(false);
            endrecycle = this.add.image(400, 150, 'endrecycle');
            endrecycle.setScale(0.7);
            diaAudio.destroy();
            diaAudio = this.sound.add('bAduio14');
            diaAudio.play();
            var tryother = this.add.image(700, 400, 'tryother').setInteractive();
            tryother.setScale(0.4);
            tryother.once('pointerup', function () {
                clearTrigger == 0;
                diaAudio.destroy();
                this.scene.start('sceneA');
            }, this);
        }
    }
});
// show dialog and items, make items interactive
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
    glass = this.physics.add.sprite(450, 450, "Glass").setInteractive();
    glass.name = "Glass";
    glass.setScale(0.5);
    bag = this.physics.add.sprite(750, 300, "bag").setInteractive();
    bag.setScale(0.5);
    bag.name = "bag";
    banana = this.physics.add.sprite(650, 400, "banana").setInteractive();
    banana.setScale(0.5);
    banana.name = "banana";
    dia2 = this.add.image(400, 150, 'dialog2').setInteractive();
    dia2.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('bAudio2');
    diaAudio.play();
    letstry = this.add.image(700, 400, 'letstry').setInteractive();
    letstry.setScale(0.4);
    letstry.once('pointerup', dia3show, this);
}
// next dialog
function dia3show() {
    dia2.destroy();
    letstry.destroy();
    dia3 = this.add.image(400, 100, 'dialog3').setInteractive();
    dia3.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('bAudio3');
    diaAudio.play();
    helpu = this.add.image(700, 400, 'helpu').setInteractive();
    helpu.setScale(0.5);
    helpu.once('pointerup', gamestart, this);
}


//all item can be drag.
function gamestart() {
    dia3.destroy();
    helpu.destroy();
    diahow = this.add.image(700, 100, 'how').setInteractive();
    diahow.setScale(0.5);
    this.input.setDraggable(can);
    this.input.setDraggable(paper);
    this.input.setDraggable(egg);
    this.input.setDraggable(glass);
    this.input.setDraggable(bag);
    this.input.setDraggable(banana);

}
// check if the item is in regular bin
function ckeckRegular(gameObject) {
    if (gameObject.x < 550 && gameObject.x > 420) {
        if (gameObject.y < 400 && gameObject.y > 200) {
            return true;
        }
    }
}
// check if the item is in recycle bin
function ckeckRecycle(gameObject) {
    if (gameObject.x < 370 && gameObject.x > 200) {
        if (gameObject.y < 400 && gameObject.y > 200) {
            return true;
        }
    }
}
// check if the item is recycle rubbish
function isRecycle(gameObject) {
    if (gameObject.name == "can" || gameObject.name == "paper" || gameObject.name == "Glass" || gameObject.name == "bag") {
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

        function SceneC() {
            Phaser.Scene.call(this, { key: 'sceneC' });
        },

    preload: function () {
        // load all necssary asserts.
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
        this.load.audio('cAduio1', '../Audio/game/plant tree/d1.wav');
        this.load.audio('cAduio2', '../Audio/game/plant tree/d2.wav');
        this.load.audio('cAduio4', '../Audio/game/plant tree/d4.wav');
        this.load.audio('cAduio6', '../Audio/game/plant tree/d6.wav');
        this.load.audio('cAduio7', '../Audio/game/plant tree/d7.wav');
        this.load.audio('cAduio8', '../Audio/game/plant tree/d8.wav');
        this.load.audio('cAduio9', '../Audio/game/plant tree/d9.wav');
        this.load.audio('cAduio13', '../Audio/game/plant tree/d13.wav');
        this.load.audio('cAduio14', '../Audio/game/plant tree/d14.wav');
        this.load.audio('reason56', '../Audio/game/plant tree/reason 5 6.wav');
        this.load.audio('notsuit', '../Audio/game/plant tree/not suitable place.wav');
        this.load.audio('tryAgain', '../Audio/game/plant tree/tryAgain.wav');
    },
    create: function () {
        // inset image in the scene
        var background = this.add.image(450, 250, 'background');
        background.setScale(0.5);
        var child = this.add.image(150, 300, 'child');
        cDia1 = this.add.image(400, 150, 'cDia1');
        cDia1.setScale(0.6);
        
        diaAudio = this.sound.add('cAduio1');
        diaAudio.play();
        cNext = this.add.image(700, 400, 'next').setInteractive();
        cNext.setScale(0.5);
        cNext.once('pointerup', c2Sence, this);
        // drag start change color
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);

        });
        //draging change x, y
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        // drag end check if it is in the correct place
        this.input.on('dragend', function (pointer, gameObject) {
            if (isInyard(gameObject)) {
                gameObject.clearTint();
            } else {
                suitableHint = this.add.image(450, 300, 'notsuit');
                suitableHint.setScale(0.5);

                diaAudio.destroy();
                diaAudio = this.sound.add('tryAgain');
                diaAudio.play();
                tryAgain = this.add.image(450, 350, 'tryAgain').setInteractive();
                tryAgain.setScale(0.4);
                tryAgain.once('pointerup', clearTree, this);
            }
        }, this);

    },
    // check if all item in the correct place, end the game
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
    }
});

function c2Sence() {
    cDia1.destroy();
    cNext.destroy();
    diaAudio.destroy();
    cDia2 = this.add.image(400, 150, 'cDia2');
    cDia2.setScale(0.6);
    diaAudio = this.sound.add('cAduio2');
    diaAudio.play();
    cNext = this.add.image(700, 400, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', c3Sence, this);
}


function c3Sence() {
    cDia2.destroy();
    cNext.destroy();
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio4');
    diaAudio.play();
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
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio7');
    diaAudio.play();
    cDia7 = this.add.image(400, 150, 'cDia7');
    cDia7.setScale(0.5);
    cNext = this.add.image(700, 400, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', cNextPhase, this);
}
// if choose wrong answer
function wrongChoice() {
    cDia3.destroy();
    native.destroy();
    nonnative.destroy();
    plantall.destroy();
    cDia5 = this.add.image(300, 150, 'cDia6');
    cDia5.setScale(0.4);
    var wrReason = this.add.image(650, 200, 'wrongreason');
    wrReason.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('reason56');
    diaAudio.play();
    var restart = this.add.image(700, 400, 'restart').setInteractive();
    restart.setScale(0.5);
    restart.once('pointerup', function () {
        this.scene.restart();
        diaAudio.destroy();
    }, this);
}

function cNextPhase() {
    cDia7.destroy();
    cNext.destroy();
    cDia8 = this.add.image(200, 100, 'cDia8');
    cDia8.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio8');
    diaAudio.play();
    sbackground = this.add.image(500, 250, 'slist');
    sbackground.setScale(0.5);
    cNext = this.add.image(730, 450, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', preplantGame, this);
}

function preplantGame() {
    cDia8.destroy();
    cNext.destroy();
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio9');
    diaAudio.play();
    cDia9 = this.add.image(200, 100, 'cDia9');
    cDia9.setScale(0.4);
    cTry = this.add.image(730, 450, 'letstry').setInteractive();
    cTry.setScale(0.5);
    cTry.once('pointerup', plantGame, this);
}
// make all trees are dragable
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
//reset the trees
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
// check if items in the correct place
function isInyard(gameObject) {
    if (gameObject.y >= 250) {
        return true;
    }
    return false;
}
// end the game
function endPlant() {
    destroyConfirm = true;
    confirmButton.setActive(false).setVisible(false);
    cDia13 = this.add.image(400, 150, 'cDia13');
    cDia13.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio13');
    diaAudio.play();
    cNext = this.add.image(730, 450, 'next').setInteractive();
    cNext.setScale(0.5);
    cNext.once('pointerup', thankPlant, this);
}
// show thanks
function thankPlant() {
    cDia13.destroy();
    cNext.destroy();
    cDia14 = this.add.image(400, 150, 'cDia14');
    cDia14.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('cAduio14');
    diaAudio.play();
    var otherGame = this.add.image(730, 450, 'otherGame').setInteractive();
    otherGame.setScale(0.5);
    otherGame.once('pointerup', function () {
        this.scene.start('sceneA');
    }, this);
}

var dDia1;
var dDia2;
var dDia3;
var dDia4;
var dDia5;
var dDia6;
var dDia7;
var dDia8;
var dDia9;
var dDia10;
var dDia11;
var dDia14;
var dDia15;
var dNext;
var cbowl;
var sbowl;
var choiceBowl1;
var choiceBowl2;
var choiceBowl3;
var bowlShow;
var bowl;
var bowlBox;
var bowlHint;
var bowlAgain;
// third game scene: water bowl game
var SceneD = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneD() {
            Phaser.Scene.call(this, { key: 'sceneD' });
        },

    preload: function () {
        // loader, show the process bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(280, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 150,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(290, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        //load all necessary asserts.
        this.load.image('dbackground', '../assets/game/waterbowl game/image of waterbowl game/background pic.png');
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
        this.load.image('next', '../assets/game/waterbowl game/image of waterbowl game/button next.png');
        this.load.image('yespl', '../assets/game/waterbowl game/image of waterbowl game/button my pleasure.png');
        this.load.image('mchoice1', '../assets/game/waterbowl game/image of waterbowl game/button ceramic 5.png');
        this.load.image('mchoice2', '../assets/game/waterbowl game/image of waterbowl game/button steel 5.png');
        this.load.image('reason6', '../assets/game/waterbowl game/image of waterbowl game/notification 8.png');
        this.load.image('drestart', '../assets/game/waterbowl game/image of waterbowl game/button restart.png');
        this.load.image('shallow', '../assets/game/waterbowl game/image of waterbowl game/button shallow 7.png');
        this.load.image('deep', '../assets/game/waterbowl game/image of waterbowl game/button deep 7.png');
        this.load.image('withsth', '../assets/game/waterbowl game/image of waterbowl game/button bowl with 7.png');
        this.load.image('reason8', '../assets/game/waterbowl game/image of waterbowl game/notification 6.png');
        this.load.image('showbowl', '../assets/game/waterbowl game/image of waterbowl game/picture bowl 11.png');
        this.load.image('bowl', '../assets/game/waterbowl game/image of waterbowl game/picture bowl 12.png');
        this.load.image('bowlbox', '../assets/game/waterbowl game/image of waterbowl game/picture drag 12.png');
        this.load.image('bowlhint', '../assets/game/waterbowl game/image of waterbowl game/notification 13.png');
        this.load.image('tryAgaind', '../assets/game/waterbowl game/image of waterbowl game/button try again.png');
        this.load.image('tryOther', '../assets/game/waterbowl game/image of waterbowl game/button try another.png');
        this.load.audio('daudio1', '../Audio/game/waterbowl/d1.wav');
        this.load.audio('daudio2', '../Audio/game/waterbowl/d2.wav');
        this.load.audio('daudio3', '../Audio/game/waterbowl/d3.wav');
        this.load.audio('daudio4', '../Audio/game/waterbowl/d4.wav');
        this.load.audio('daudio5', '../Audio/game/waterbowl/d5.wav');
        this.load.audio('daudio6', '../Audio/game/waterbowl/d6 8.wav');
        this.load.audio('daudio7', '../Audio/game/waterbowl/d7.wav');
        this.load.audio('daudio8', '../Audio/game/waterbowl/d6 8.wav');
        this.load.audio('daudio9', '../Audio/game/waterbowl/d9.wav');
        this.load.audio('daudio10', '../Audio/game/waterbowl/d10.wav');
        this.load.audio('daudio11', '../Audio/game/waterbowl/d11.wav');
        this.load.audio('daudio14', '../Audio/game/waterbowl/d14.wav');
        this.load.audio('daudion6', '../Audio/game/waterbowl/n6.wav');
        this.load.audio('daudion8', '../Audio/game/waterbowl/n8.wav');
        this.load.audio('daudion11', '../Audio/game/waterbowl/n11.wav');
        this.load.audio('daudion13', '../Audio/game/waterbowl/n13.wav');
         
    },
    create: function () {
        //insert image in this scene
        var background = this.add.image(450, 250, 'dbackground');
        background.setScale(0.5);
        var child = this.add.image(750, 350, 'child').setInteractive();
        dDia1 = this.add.image(400, 150, 'dDia1');
        dDia1.setScale(0.6);
        diaAudio = this.sound.add('daudio1');
        diaAudio.play();
        dNext = this.add.image(200, 450, 'next').setInteractive();
        dNext.setScale(0.5);
        dNext.once('pointerup', d2Sence, this);
        //drag start, theitem be red
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);

        });
        //draging, change the items' x, y
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        //drag end, check if it is in the correct place.
        this.input.on('dragend', function (pointer, gameObject) {
            if (isUnderTree(gameObject)) {
                gameObject.clearTint();
                this.input.setDraggable(bowl, false);
                bowlBox.destroy();
                dDia14 = this.add.image(700, 100, 'dDia14');
                dDia14.setScale(0.4);
                diaAudio.destroy();
                diaAudio = this.sound.add('daudio14');
                diaAudio.play();
                dNext = this.add.image(450, 450, 'next').setInteractive();
                dNext.setScale(0.5);
                dNext.once('pointerup', endBowl, this);
            } else {
                this.input.setDraggable(bowl, false);
                bowlHint = this.add.image(450, 100, 'bowlhint');
                bowlHint.setScale(0.5);
                diaAudio.destroy();
                diaAudio = this.sound.add('daudion13');
                diaAudio.play();
                bowlAgain = this.add.image(450, 150, 'tryAgaind').setInteractive();
                bowlAgain.setScale(0.4);
                bowlAgain.once('pointerup', clearBowl, this);

            }
        }, this);
    },
    update: function () {
    }
});

function d2Sence() {
    dDia1.destroy();
    dNext.destroy();
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio2');
    diaAudio.play();
    dDia2 = this.add.image(400, 150, 'dDia2');
    dDia2.setScale(0.6);
    dNext = this.add.image(200, 450, 'next').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', d3Sence, this);
}
function d3Sence() {
    dDia2.destroy();
    dNext.destroy();
    dDia3 = this.add.image(400, 150, 'dDia3');
    dDia3.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio3');
    diaAudio.play();
    dNext = this.add.image(200, 450, 'next').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', d4Sence, this);
}
function d4Sence() {
    dDia3.destroy();
    dNext.destroy();
    dDia4 = this.add.image(400, 150, 'dDia4');
    dDia4.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio4');
    diaAudio.play();
    dNext = this.add.image(200, 400, 'yespl').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', chooseMaterial, this);
}
// different choice to different respons
function chooseMaterial() {
    dDia4.destroy();
    dNext.destroy();
    dDia5 = this.add.image(500, 150, 'dDia5');
    dDia5.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio5');
    diaAudio.play();
    cbowl = this.add.image(150, 200, 'mchoice1').setInteractive();
    cbowl.setScale(0.4);
    sbowl = this.add.image(150, 320, 'mchoice2').setInteractive();
    sbowl.setScale(0.4);
    cbowl.once('pointerup', dgoodChoice, this);
    sbowl.once('pointerup', dwrongChoice, this);
}
// correct choice to next questions
function dgoodChoice() {
    dDia5.destroy();
    cbowl.destroy();
    sbowl.destroy();
    dDia7 = this.add.image(500, 150, 'dDia7');
    dDia7.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio7');
    diaAudio.play();
    choiceBowl1 = this.add.image(150, 200, 'shallow').setInteractive();
    choiceBowl1.setScale(0.4);
    choiceBowl2 = this.add.image(150, 320, 'deep').setInteractive();
    choiceBowl2.setScale(0.4);
    choiceBowl3 = this.add.image(150, 440, 'withsth').setInteractive();
    choiceBowl3.setScale(0.4);

    choiceBowl1.once('pointerup', dgoodChoice2, this);
    choiceBowl2.once('pointerup', dwrongChoice2, this);
    choiceBowl3.once('pointerup', dgoodChoice3, this);
}
//wrong choice to restart
function dwrongChoice() {
    dDia5.destroy();
    cbowl.destroy();
    sbowl.destroy();
    dDia6 = this.add.image(700, 100, 'dDia6');
    dDia6.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio6');
    diaAudio.play();
    var dwrong = this.add.image(400, 300, 'reason6');
    dwrong.setScale(0.5);
    dNext = this.add.image(100, 450, 'drestart').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', function () {
        this.scene.restart();
    }, this);
}

function dgoodChoice2() {
    dDia7.destroy();
    choiceBowl1.destroy();
    choiceBowl2.destroy();
    choiceBowl3.destroy();
    dDia9 = this.add.image(400, 150, 'dDia9');
    dDia9.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio9');
    diaAudio.play();
    dNext = this.add.image(200, 450, 'next').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', d6Sence, this);
}
function dgoodChoice3() {
    dDia7.destroy();
    choiceBowl1.destroy();
    choiceBowl2.destroy();
    choiceBowl3.destroy();
    dDia9 = this.add.image(400, 150, 'dDia10');
    dDia9.setScale(0.6);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio10');
    diaAudio.play();
    dNext = this.add.image(200, 450, 'next').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', d6Sence, this);
}
function dwrongChoice2() {
    dDia7.destroy();
    choiceBowl1.destroy();
    choiceBowl2.destroy();
    choiceBowl3.destroy();
    dDia6 = this.add.image(700, 100, 'dDia6');
    dDia6.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio6');
    diaAudio.play();
    var dwrong = this.add.image(400, 300, 'reason8');
    dwrong.setScale(0.5);
    dNext = this.add.image(100, 450, 'drestart').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', function () {
        this.scene.restart();
    }, this);
}

function d6Sence() {
    dDia9.destroy();
    dNext.destroy();
    dDia11 = this.add.image(700, 100, 'dDia11');
    dDia11.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('daudio11');
    diaAudio.play();
    bowlShow = this.add.image(400, 300, 'showbowl');
    bowlShow.setScale(0.5);
    dNext = this.add.image(130, 450, 'next').setInteractive();
    dNext.setScale(0.5);
    dNext.once('pointerup', bowlGame, this);
}
//set bowl dragable
function bowlGame() {
    dDia11.destroy();
    dNext.destroy();
    bowlShow.destroy();
    bowlBox = this.add.image(700, 100, 'bowlbox').setInteractive();
    bowlBox.setScale(0.4);
    bowl = this.add.image(700, 150, 'bowl').setInteractive();
    bowl.setScale(0.7);
    this.input.setDraggable(bowl);
}
// check if the bowl is in the corect place
function isUnderTree(gameObject) {
    if (gameObject.y > 300 && gameObject.x < 300) {
        return true;
    }
    return false;
}
// reset the place of bowl
function clearBowl() {
    bowl.destroy();
    bowlHint.destroy();
    bowlAgain.destroy();
    bowl = this.add.image(700, 150, 'bowl').setInteractive();
    bowl.setScale(0.7);
    this.input.setDraggable(bowl);
}
//end game
function endBowl() {
    dDia14.destroy();
    dNext.destroy();
    dDia15 = this.add.image(700, 100, 'dDia15');
    dDia15.setScale(0.4);
    var tryOther = this.add.image(450, 450, 'tryOther').setInteractive();
    tryOther.setScale(0.5);
    tryOther.once('pointerup', function () {
        diaAudio.destroy();
        this.scene.start('sceneA');
    }, this);
}

var eDia1;
var eDia2;
var eDia3;
var eDia4;
var eDia5;
var eDia6;
var eDia7;
var eDia8;
var eDia9;
var eDia10;
var eDia11;
var eDia12;
var eNext;
var wall;
var house;
var eaves;
var reason4;
var diy;
var diwp;
var reason8;
var boxbox;
var birdBox;
var boxhint;
var boxagain;
// forth game scene: bird box game
var SceneE = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneE() {
            Phaser.Scene.call(this, { key: 'sceneE' });
        },

    preload: function () {
        //loader, show the processor bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(280, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 150,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(290, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        //load all necessary assert
        this.load.image('ebackground', '../assets/game/Birdbox game/game image/bridbox game.png');
        this.load.image('child', "../assets/game/Boy.png");
        this.load.image('eDia1', '../assets/game/Birdbox game/game image/dialog1.png');
        this.load.image('eDia2', '../assets/game/Birdbox game/game image/dialog2.png');
        this.load.image('eDia3', '../assets/game/Birdbox game/game image/dialog3.png');
        this.load.image('eDia4', '../assets/game/Birdbox game/game image/dialog4.png');
        this.load.image('eDia5', '../assets/game/Birdbox game/game image/dialog5.png');
        this.load.image('eDia6', '../assets/game/Birdbox game/game image/dialog6.png');
        this.load.image('eDia7', '../assets/game/Birdbox game/game image/dialog7.png');
        this.load.image('eDia8', '../assets/game/Birdbox game/game image/dialog8.png');
        this.load.image('eDia9', '../assets/game/Birdbox game/game image/dialog9.png');
        this.load.image('eDia10', '../assets/game/Birdbox game/game image/dialog10.png');
        this.load.image('eDia11', '../assets/game/Birdbox game/game image/dialog11.png');
        this.load.image('eDia12', '../assets/game/Birdbox game/game image/dialog12.png');
        this.load.image('next', '../assets/game/Birdbox game/game image/next.png');
        this.load.image('wall', '../assets/game/Birdbox game/game image/HighOnTheWall.png');
        this.load.image('house', '../assets/game/Birdbox game/game image/InMyHouse.png');
        this.load.image('eaves', '../assets/game/Birdbox game/game image/UnderTheEaves.png');
        this.load.image('reason4', '../assets/game/Birdbox game/game image/reason4.png');
        this.load.image('eRestart', '../assets/game/Birdbox game/game image/restart.png');
        this.load.image('diwp', '../assets/game/Birdbox game/game image/No.png');
        this.load.image('diy', '../assets/game/Birdbox game/game image/Yes.png');
        this.load.image('reason8', '../assets/game/Birdbox game/game image/reason8.png');
        this.load.image('boxbox', '../assets/game/Birdbox game/game image/instruction.png');
        this.load.image('birdBox', '../assets/game/Birdbox game/game image/bird-house.png');
        this.load.image('tryOther', '../assets/game/waterbowl game/image of waterbowl game/button try another.png');
        this.load.image('yespl', '../assets/game/waterbowl game/image of waterbowl game/button my pleasure.png');
        this.load.image('boxhint', '../assets/game/Birdbox game/game image/gamefail.png');
        this.load.image('boxagain', '../assets/game/waterbowl game/image of waterbowl game/button try again.png');
        this.load.audio('eaudio1', '../Audio/game/birdbox/d1.wav');
        this.load.audio('eaudio2', '../Audio/game/birdbox/d2.wav');
        this.load.audio('eaudio3', '../Audio/game/birdbox/d3.wav');
        this.load.audio('eaudio4', '../Audio/game/birdbox/d4.wav');
        this.load.audio('eaudio5', '../Audio/game/birdbox/d5.wav');
        this.load.audio('eaudio6', '../Audio/game/birdbox/d6.wav');
        this.load.audio('eaudio7', '../Audio/game/birdbox/d7.wav');
        this.load.audio('eaudio8', '../Audio/game/birdbox/d8.wav');
        this.load.audio('eaudio10', '../Audio/game/birdbox/d10.wav');
        this.load.audio('eaudio11', '../Audio/game/birdbox/d11.wav');
        this.load.audio('einstruction', '../Audio/game/birdbox/instructions.wav');
        this.load.audio('ereason5', '../Audio/game/birdbox/reason5.wav');
        this.load.audio('ereason8', '../Audio/game/birdbox/reason8.wav');
        this.load.audio('ethanks', '../Audio/game/birdbox/thankyou.wav');
        this.load.audio('notsuitbox', '../Audio/game/birdbox/notsuitbox.wav');
    },
    create: function () {
        //insert the image
        var background = this.add.image(450, 250, 'ebackground');
        background.setScale(0.7);
        var child = this.add.image(150, 350, 'child').setInteractive();
        eDia1 = this.add.image(200, 120, 'eDia1');
        eDia1.setScale(0.5);  
        diaAudio = this.sound.add('eaudio1');
        diaAudio.play();
        eNext = this.add.image(700, 450, 'next').setInteractive();
        eNext.setScale(0.5);
        eNext.once('pointerup', e2Sence, this);
        //drag start, the item be red
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);

        });
        //draging, change the items' x, y
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        // when drag end, show different respons
        this.input.on('dragend', function (pointer, gameObject) {
            if (isRightBox(gameObject)) {
                gameObject.clearTint();
                this.input.setDraggable(birdBox, false);
                boxbox.destroy();
                eDia11 = this.add.image(200, 120, 'eDia11');
                eDia11.setScale(0.4);
                diaAudio.destroy();
                diaAudio = this.sound.add('eaudio11');
                diaAudio.play();
                eNext = this.add.image(700, 400, 'next').setInteractive();
                eNext.setScale(0.5);
                eNext.once('pointerup', endBox, this);
            } else {
                this.input.setDraggable(gameObject, false);
                boxhint = this.add.image(450, 100, 'boxhint');
                boxhint.setScale(0.5);
                diaAudio.destroy();
                diaAudio = this.sound.add('notsuitbox');
                diaAudio.play();
                boxagain = this.add.image(450, 150, 'boxagain').setInteractive();
                boxagain.setScale(0.4);
                boxagain.once('pointerup', clearBox, this);

            }
        }, this);

    }
});

function e2Sence() {
    eDia1.destroy();
    eNext.destroy();
    eDia2 = this.add.image(200, 120, 'eDia2');
    eDia2.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio2');
    diaAudio.play();
    eNext = this.add.image(700, 450, 'next').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', e3Sence, this);
}
function e3Sence() {
    eDia2.destroy();
    eNext.destroy();
    eDia3 = this.add.image(200, 120, 'eDia3');
    eDia3.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio3');
    diaAudio.play();
    eNext = this.add.image(700, 450, 'next').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', e4Sence, this);
}
//show the choice to different respons
function e4Sence() {
    eDia3.destroy();
    eNext.destroy();
    eDia4 = this.add.image(200, 120, 'eDia4');
    eDia4.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio4');
    diaAudio.play();
    wall = this.add.image(750, 200, 'wall').setInteractive();
    wall.setScale(0.4);
    house = this.add.image(750, 320, 'house').setInteractive();
    house.setScale(0.4);
    eaves = this.add.image(750, 440, 'eaves').setInteractive();
    eaves.setScale(0.4);
    wall.once('pointerup', egoodChoice, this);
    house.once('pointerup', ewrongChoice, this);
    eaves.once('pointerup', egoodChoice, this);
}
function egoodChoice() {
    eDia4.destroy();
    wall.destroy();
    house.destroy();
    eaves.destroy();
    eDia6 = this.add.image(200, 120, 'eDia6');
    eDia6.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio6');
    diaAudio.play();
    eNext = this.add.image(700, 450, 'next').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', e5Sence, this);
}
//wrong choice to resart game
function ewrongChoice() {
    eDia4.destroy();
    wall.destroy();
    house.destroy();
    eaves.destroy();
    eDia5 = this.add.image(200, 120, 'eDia5');
    eDia5.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio5');
    diaAudio.play();
    reason4 = this.add.image(500, 300, 'reason4');
    reason4.setScale(0.5);
    eNext = this.add.image(800, 460, 'eRestart').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', function () {
        this.scene.restart();
    }, this);
}

function e5Sence() {
    eDia6.destroy();
    eNext.destroy();
    eDia7 = this.add.image(200, 120, 'eDia7');
    eDia7.setScale(0.5);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio7');
    diaAudio.play();
    diy = this.add.image(750, 200, 'diy').setInteractive();
    diy.setScale(0.4);
    diwp = this.add.image(750, 400, 'diwp').setInteractive();
    diwp.setScale(0.4);
    diwp.once('pointerup', egoodChoice2, this);
    diy.once('pointerup', ewrongChoice2, this);
}

function ewrongChoice2() {
    eDia7.destroy();
    diy.destroy();
    diwp.destroy();

    eDia8 = this.add.image(200, 120, 'eDia8');
    eDia8.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio8');
    diaAudio.play();
    reason8 = this.add.image(500, 300, 'reason8');
    reason8.setScale(0.5);
    eNext = this.add.image(800, 460, 'eRestart').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', function () {
        this.scene.restart();
    }, this);
}
function egoodChoice2() {
    eDia7.destroy();
    diy.destroy();
    diwp.destroy();

    eDia10 = this.add.image(200, 120, 'eDia10');
    eDia10.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('eaudio10');
    diaAudio.play();
    eNext = this.add.image(700, 400, 'yespl').setInteractive();
    eNext.setScale(0.5);
    eNext.once('pointerup', boxGame, this);
}
// set bird box dragable, game start
function boxGame() {
    eDia10.destroy();
    eNext.destroy();
    boxbox = this.add.image(220, 120, 'boxbox');
    boxbox.setScale(0.7);
    birdBox = this.add.image(450, 120, 'birdBox').setInteractive();
    birdBox.setScale(0.3);
    this.input.setDraggable(birdBox);
}
// check if the box in the correct place
function isRightBox(gameObject) {
    if (gameObject.y < 300) {
        if (gameObject.x > 600) {
            if (gameObject.x < 450) {
                if (gameObject.y > 250) {
                    return true;
                }
            } else {
                if (gameObject.y > 125) {
                    return true;
                }
            }
        }
    }
    return false;
}
//reset the box
function clearBox() {
    birdBox.destroy();
    boxhint.destroy();
    boxagain.destroy();
    birdBox = this.add.image(450, 120, 'birdBox').setInteractive();
    birdBox.setScale(0.3);
    this.input.setDraggable(birdBox);
}
// end the game
function endBox() {
    eDia11.destroy();
    eNext.destroy();
    eDia12 = this.add.image(200, 120, 'eDia12');
    eDia12.setScale(0.4);
    diaAudio.destroy();
    diaAudio = this.sound.add('ethanks');
    diaAudio.play();
    var tryOther = this.add.image(700, 400, 'tryOther').setInteractive();
    tryOther.setScale(0.5);
    tryOther.once('pointerup', function () {
        this.scene.start('sceneA');
    }, this);
}
//canvas setting, 
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
//build the ame
var game = new Phaser.Game(config);

//mute function
var checkMute = false;
function mute() {
    if (!checkMute) {
        bgmusic.stop();
        document.getElementById('mute').setAttribute("src", "../assets/unmute music.png");
        document.getElementById('mute').setAttribute("title", "unmute");
        checkMute = true;
    }
    else {
        bgmusic.play({
            loop: true
        });
        document.getElementById('mute').setAttribute("src", "../assets/mute music.png");
        document.getElementById('mute').setAttribute("title", "mute");
        checkMute = false;
    }

}
//back to list function
function backtoList() {
    this.scene.start('sceneA');
}