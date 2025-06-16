namespace SpriteKind {
    export const Generalkrobat = SpriteKind.create()
    export const Scornor = SpriteKind.create()
}
namespace StatusBarKind {
    export const Generalkrobat2 = StatusBarKind.create()
    export const Scornor = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
    controller.moveSprite(Kael, 79, 0)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite7) {
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite6, location5) {
    tiles.setCurrentTilemap(tilemap`level17`)
    game.showLongText("Has derrotado l primer enemigo y nos has salbado de la contaminación pero en otros continentes aún hay contaminación debes ayudar a acabar con esto. Mira ves estos sitios naranjas y blancos, son contenedores, Cade vez que consuigas basura puedes dejarla allí y a cambio te va a dar vidas, la basura se consuigue de las siguientes formas: derrotando enemigos, en cofres o abecés puedes encontrarla en el suelo", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level30`)
    game.showLongText("Do you skaped from the boss", DialogLayout.Bottom)
    sprites.destroy(Scornor2)
})
function Scornor3 () {
    Scornor2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ...........1............
        ..........1f1...........
        .........1fff1..........
        ........1fffff1.........
        .......1f11f11f1........
        ......1ff11f11ff1.......
        .....1fff22f22ff1.......
        .....1ffffffffff1.......
        .....1ffffffffff1.......
        .....1fff1fff1f11.......
        .....1fff2121ff1........
        .....1ffff212f1.........
        .....1ffffffff1.........
        ......1f1f1fff1.........
        ......1f11.1f1..........
        ......1f1..1f1..........
        ......1f1..1f1..........
        ......1f1..1f1..........
        ......1f1..1f1..........
        `, SpriteKind.Generalkrobat)
    Scornor2.ay = 350
    Scornor_alive = true
    statusbar = statusbars.create(300, 10, StatusBarKind.Scornor)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setOffsetPadding(0, 5)
    statusbar.setColor(7, 2, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
    music.play(music.createSong(assets.song`boss music`), music.PlaybackMode.UntilDone)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite4, location3) {
    tiles.setCurrentTilemap(tilemap`level4`)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile14`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Kael.isHittingTile(CollisionDirection.Bottom)) {
        Kael.setVelocity(0, -76)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level28`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
    Scornor3()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level23`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
statusbars.onZero(StatusBarKind.Generalkrobat2, function (status) {
    sprites.destroy(General_Krovax, effects.fire, 5000)
    sprites.destroy(statusbar)
    General_Kroger_alive = false
    info.changeScoreBy(15)
    tiles.setCurrentTilemap(tilemap`level13`)
})
function Bat2 () {
    Bat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Generalkrobat)
    Bat.ay = 350
    Bat_alive = true
    statusbar = statusbars.create(300, 10, StatusBarKind.Scornor)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setOffsetPadding(0, 5)
    statusbar.setColor(7, 2, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
    music.play(music.createSong(assets.song`boss music`), music.PlaybackMode.UntilDone)
    Bat.follow(Kael)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.showLongText("no vayas por allí, ese no es el camino", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level33`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
function General_Krovax2 () {
    General_Krovax = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Generalkrobat)
    General_Krovax.ay = 350
    General_Kroger_alive = true
    statusbar = statusbars.create(150, 10, StatusBarKind.Generalkrobat2)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setOffsetPadding(0, 5)
    statusbar.setColor(7, 2, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
    music.play(music.createSong(assets.song`boss music`), music.PlaybackMode.UntilDone)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (info.score() >= 10) {
        info.changeLifeBy(1)
        info.changeScoreBy(-10)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level25`)
    mySprite.setPosition(160, 120)
    mySprite.setPosition(160, 120)
    mySprite.setPosition(160, 120)
    mySprite.setPosition(160, 120)
    mySprite.setPosition(160, 120)
    mySprite.setPosition(160, 120)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    Kael.vy += -1000
    pause(1000)
    Kael.vy += 75
})
statusbars.onZero(StatusBarKind.Scornor, function (status) {
    sprites.destroy(Scornor2, effects.fire, 1000)
    tiles.setCurrentTilemap(tilemap`level30`)
    sprites.destroy(statusbar)
    info.changeScoreBy(30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Generalkrobat, function (sprite2, otherSprite) {
    if (Kael.vy > 0 && Kael.y < General_Krovax.y) {
        Kael.vy = -70
        statusbar.value += -10
    } else {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Scornor, function (sprite2, otherSprite) {
    if (Kael.vy > 0 && Kael.y < Scornor2.y) {
        Kael.vy = -70
        statusbar.value += -10
    } else {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level33`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level36`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
    game.showLongText("Gamo over", DialogLayout.Full)
    game.setDialogCursor(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
        . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
        . c 7 7 8 8 8 8 8 8 8 7 7 c . 
        . c 9 7 8 7 7 7 7 7 8 7 9 c . 
        . c 9 9 7 7 7 7 7 7 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `)
    game.setDialogTextColor(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite3, location2) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.setPosition(randint(0, 128), randint(0, 128))
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite5, location4) {
    tiles.setCurrentTilemap(tilemap`level11`)
    General_Krovax2()
    tiles.placeOnRandomTile(General_Krovax, sprites.dungeon.floorLight0)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setCurrentTilemap(tilemap`level21`)
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
    game.showLongText("Gamo over", DialogLayout.Full)
    game.setDialogCursor(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
        . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
        . c 7 7 8 8 8 8 8 8 8 7 7 c . 
        . c 9 7 8 7 7 7 7 7 8 7 9 c . 
        . c 9 9 7 7 7 7 7 7 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `)
    game.setDialogTextColor(2)
})
let Bat_alive = false
let Bat: Sprite = null
let General_Kroger_alive = false
let General_Krovax: Sprite = null
let statusbar: StatusBarSprite = null
let Scornor_alive = false
let Scornor2: Sprite = null
let Kael: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......99999999......
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.Food)
Kael = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(0, 128), randint(0, 128))
info.setLife(3)
controller.moveSprite(Kael, 79, 0)
scene.cameraFollowSprite(Kael)
Kael.setStayInScreen(true)
Kael.ay += 75
music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a000004000000000000000000000000000000000230000400080001270c001000012514001800012c1c002000011d2400280001272c003000012534003800012c3c004000011d`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Kael, assets.tile`myTile0`)
game.onUpdate(function () {
    if (Scornor_alive) {
        if (Kael.x + 1 < Scornor2.x) {
            Scornor2.vx = -30
        } else if (Kael.x - 1 > Scornor2.x) {
            Scornor2.vx = 30
        } else if (Kael.x + 0 == Scornor2.x) {
            if (Math.percentChance(90)) {
                Scornor2.vx = -30
            } else {
                Scornor2.vx = 30
            }
        }
    }
})
game.onUpdate(function () {
    if (General_Kroger_alive) {
        if (Kael.x + 1 < General_Krovax.x) {
            General_Krovax.vx = -30
            General_Krovax.setImage(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111dbf......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd111ddddddf......
                ......fd1dddddddbf......
                ......fd1dfbddbbff......
                ......fbddfcdbbcf.......
                .....ffffccddbfff.......
                ....fcb1bbbfcffff.......
                ....f1b1dcffffffff......
                ....fdfdf..ffffffffff...
                .....f.f.....ffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
        } else if (Kael.x - 1 > General_Krovax.x) {
            General_Krovax.vx = 30
            General_Krovax.setImage(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......fbd1111111f.......
                ......fdd1111111df......
                ......fddd111111df......
                ......fdddddd111df......
                ......fdddddd111df......
                ......fbddddddd1df......
                ......ffbbddbfd1df......
                .......fcbbdcfddbf......
                .......fffbddccffff.....
                .......ffffcfbbb1bcf....
                ......ffffffffcd1b1f....
                ...ffffffffff..fdfdf....
                .....ffffff.....f.f.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
        } else if (Kael.x + 0 == General_Krovax.x) {
            if (Math.percentChance(90)) {
                General_Krovax.vx = -30
                General_Krovax.setImage(img`
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff1111ff........
                    .......fb111111bf.......
                    .......f1111111dbf......
                    ......fd1111111ddf......
                    ......fd111111dddf......
                    ......fd111ddddddf......
                    ......fd111ddddddf......
                    ......fd1dddddddbf......
                    ......fd1dfbddbbff......
                    ......fbddfcdbbcf.......
                    .....ffffccddbfff.......
                    ....fcb1bbbfcffff.......
                    ....f1b1dcffffffff......
                    ....fdfdf..ffffffffff...
                    .....f.f.....ffffff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `)
            } else {
                General_Krovax.vx = 30
                General_Krovax.setImage(img`
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff1111ff........
                    .......fb111111bf.......
                    ......fbd1111111f.......
                    ......fdd1111111df......
                    ......fddd111111df......
                    ......fdddddd111df......
                    ......fdddddd111df......
                    ......fbddddddd1df......
                    ......ffbbddbfd1df......
                    .......fcbbdcfddbf......
                    .......fffbddccffff.....
                    .......ffffcfbbb1bcf....
                    ......ffffffffcd1b1f....
                    ...ffffffffff..fdfdf....
                    .....ffffff.....f.f.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `)
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Kael.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        info.changeLifeBy(-1)
    }
})
game.onUpdateInterval(500, function () {
    if (Kael.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-1)
    }
})
