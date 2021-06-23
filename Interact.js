var items
function shipMovement() {
    if (ship.x == 700 && ship.y == 878) {
        if (player.isTouching(ship) && keyDown("e")) {
            // player.visible = false
            //1350,330
            player.x = 1350
            player.y = 330
            ship.x = 1370
            ship.y = 450


        }
    }
    else if(ship.x == 1370 && ship.y == 450){
        if (player.isTouching(ship) && keyDown("e")) {
            // player.visible = false
            player.x = 588
            player.y = 888
            ship.x = 700
            ship.y = 878

        }
    }

}
function houseEnter(){

    if(player.isTouching(house1)){
        if(keyCode === 69){
        // player.visible = false
        items = "bridge_key"
        textSize(30)
        fill("blue")
        text("Take this key to go to the 2nd island",camera.x + 100,camera.y + 150)
        console.log(items)
        }
    }
}