function Movement() {
  // move with arrow keys 
  if (keyDown("UP_ARROW")) {
    player.y -= 10
    player.changeImage("front")
    playerSprite = "up"
  }
  if (keyDown("DOWN_ARROW")) {
    player.y += 10
    player.changeImage("back")
    playerSprite = "down"
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x += 10
    player.changeImage("right")
    playerSprite = "right"
  }
  if (keyDown("lEFT_ARROW")) {
    player.x -= 10
    player.changeImage("left")
    playerSprite = "left"
  }
  if (keyDown("a")) {
    camera.zoom = camera.zoom - 0.1;
  }
  if (keyDown("space")) {
    if (playerSprite === "up") {
      player.changeImage("frontSword")
      playerSprite = "sword"
      setTimeout(() => { player.changeImage("front")
    playerSprite = "up" }, 200)
    }
    if (playerSprite === "down") {
      player.changeImage("backSword")
      playerSprite = "sword"
      setTimeout(() => { player.changeImage("back")
      playerSprite = "down" }, 200)
    }
    if (playerSprite === "left") {
      player.changeImage("leftSword")
      playerSprite = "sword"
      setTimeout(() => { player.changeImage("left") 
      playerSprite = "left"}, 200)
    }
    if (playerSprite === "right") {
      player.changeImage("rightSword")
      playerSprite = "sword"
      setTimeout(() => { player.changeImage("right")
      playerSprite = "right" }, 200)
    }

  }

}