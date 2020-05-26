sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    bogey.destroy(effects.fire, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
5 5 5 . . . . . . . . . . . . . 
5 2 5 . . 8 8 8 8 8 8 . . . . . 
2 2 5 5 . 8 8 8 8 8 8 8 . . . . 
5 2 2 5 5 8 8 8 8 8 8 8 8 . . . 
5 5 5 5 5 8 8 8 8 8 8 8 8 8 2 2 
2 2 5 5 . 8 8 8 8 8 8 8 8 . . . 
2 5 5 . . 8 8 8 8 8 8 8 . . . . 
5 5 . . . 8 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlan, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let bogey: Sprite = null
let spacePlan: Sprite = null
spacePlan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
5 2 8 8 8 8 8 8 8 8 . . . . . . 
. 2 8 1 1 f 8 8 8 8 8 . . . . . 
5 2 8 1 1 1 1 1 1 8 8 8 8 8 . . 
5 2 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
5 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlan.setPosition(18, 47)
info.setLife(5)
controller.moveSprite(spacePlan, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . 
. . . . . 2 2 4 4 2 2 2 2 . . . 
. . . . . c 4 2 2 2 2 2 c . . . 
. . . . 2 c 4 2 2 2 2 2 c 2 . . 
. . . e 2 c 4 2 2 2 2 2 c 2 e . 
. . . f 2 c 4 2 2 2 2 2 c 2 f . 
. . . f e c 2 2 2 2 2 2 c e f . 
. . . f 2 c 2 b b b b 2 c 2 f . 
. . . e 2 2 b c c c c b 2 2 e . 
. . . e e b c c c c c c b e e . 
. . . f e 4 4 4 4 4 4 4 4 e f . 
. . . f e d 2 2 2 2 2 2 d e f . 
. . . . 2 d d 2 2 2 2 d d 2 f . 
. . . . f 2 d 2 2 2 2 d 2 f . . 
. . . . . e 2 2 2 2 2 2 e . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
