namespace SpriteKind {
    export const Item = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    addItems(sprites.readDataString(otherSprite, "name"), otherSprite.image)
    if (sprites.readDataString(otherSprite, "name") == "RED") {
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setWallAt(value, false)
        }
    }
    if (sprites.readDataString(otherSprite, "name") == "BLUE") {
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(value, false)
        }
    }
    if (sprites.readDataString(otherSprite, "name") == "CHIP") {
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            tiles.setWallAt(value, false)
        }
    }
    if (sprites.readDataString(otherSprite, "name") == "KNIFE") {
        for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
            tiles.setWallAt(value, true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 17))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    removeItem("RED")
})
function findValue (name: string) {
    for (let value of toolbar.get_items()) {
        if (value.get_text(ItemTextAttribute.Name) == name) {
            return toolbar.get_items().indexOf(value)
        }
    }
    return -1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(26, 5), assets.tile`myTile11`)
    tiles.setTileAt(tiles.getTileLocation(21, 10), assets.tile`myTile11`)
    tiles.setTileAt(tiles.getTileLocation(19, 8), assets.tile`myTile24`)
    Cameras = 0
    removeItem("CHIP")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(false)
})
function CreatItems () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Red_Key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 . . . . 2 . . . . . 
            . . . . . 2 . . . . 2 . . . . . 
            . . . . . 2 . . . . 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Item)
        sprites.setDataString(Red_Key, "name", "RED")
        tiles.placeOnTile(Red_Key, value)
        tiles.setTileAt(value, sprites.castle.tileDarkGrass1)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        Blue_Key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Item)
        sprites.setDataString(Blue_Key, "name", "BLUE")
        tiles.placeOnTile(Blue_Key, value)
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        Computer_Chip = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b 7 1 7 7 7 7 b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            `, SpriteKind.Item)
        sprites.setDataString(Computer_Chip, "name", "CHIP")
        tiles.placeOnTile(Computer_Chip, value)
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        Knife = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            `, SpriteKind.Item)
        sprites.setDataString(Knife, "name", "KNIFE")
        tiles.placeOnTile(Knife, value)
        tiles.setTileAt(value, sprites.dungeon.floorDark2)
        WeaponStatus += 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    removeItem("BLUE")
})
function createtoolbar () {
    toolbar = Inventory.create_toolbar([], 3)
    toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, -1)
    toolbar.left = 4
    toolbar.bottom = 116
    toolbar.z = 100
    toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.gameOver(false)
})
function addItems (name: string, image2: Image) {
    toolbar.get_items().push(Inventory.create_item(name, image2))
    toolbar.update()
}
function removeItem (name: string) {
    toolbar.get_items().removeAt(findValue(name))
    toolbar.update()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    scene.cameraShake(6, 5000)
    game.showLongText("Guy: AHAHAHAHAHA", DialogLayout.Bottom)
    game.showLongText("Guy: So you thought you could just barge in here unannounced and take me on?", DialogLayout.Bottom)
    game.showLongText("Guy: You don't even have a weapon!", DialogLayout.Bottom)
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(42, 23))) {
        game.showLongText("You: actualy I do!", DialogLayout.Bottom)
        game.showLongText("Guy: Ahhh! Take all my belongings take everything! Ahhhhhh!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
        game.showLongText("Guy: heheh", DialogLayout.Bottom)
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(46, 3))
})
let Knife: Sprite = null
let Computer_Chip: Sprite = null
let Blue_Key: Sprite = null
let Red_Key: Sprite = null
let toolbar: Inventory.Toolbar = null
let Cameras = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
createtoolbar()
CreatItems()
Cameras = 1
let WeaponStatus = 0
forever(function () {
	
})
forever(function () {
    if (Cameras == 1) {
        pause(2000)
        pause(1000)
        tileUtil.replaceAllTiles(assets.tile`myTile16`, assets.tile`myTile15`)
        pause(2000)
        pause(1000)
        tileUtil.replaceAllTiles(assets.tile`myTile15`, assets.tile`myTile16`)
    } else {
        tileUtil.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile15`)
        tileUtil.replaceAllTiles(assets.tile`myTile16`, assets.tile`myTile15`)
    }
})
