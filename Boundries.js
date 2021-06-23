//LightGreen Grass
var lightGreenBoundry = [];
var lightGreenBoundry0, lightGreenBoundry1, lightGreenBoundry2, lightGreenBoundry3,
    lightGreenBoundry4, lightGreenBoundry5, lightGreenBoundry6, lightGreenBoundry7, lightGreenBoundry8,
    lightGreenBoundry9, lightGreenBoundry10, lightGreenBoundry11, lightGreenBoundry12, lightGreenBoundry13,
    lightGreenBoundry14, lightGreenBoundry15, lightGreenBoundry16,lightGreenBoundry17;

//DarkGreen Grass
var darkgreenBoundry = [];
var darkgreenBoundry0, darkgreenBoundry1, darkgreenBoundry2, darkgreenBoundry3, darkgreenBoundry4,
    darkgreenBoundry5, darkgreenBoundry6, darkgreenBoundry7, darkgreenBoundry8, darkgreenBoundry9, darkgreenBoundry10,
    darkgreenBoundry11, darkgreenBoundry12, darkgreenBoundry13, darkgreenBoundry14, darkgreenBoundry15, darkgreenBoundry16,
    darkgreenBoundry17, darkgreenBoundry18, darkgreenBoundry19, darkgreenBoundry20, darkgreenBoundry21, darkgreenBoundry22;
//Bridges
var bridges = []
var bridge1, bridge2, bridge3, bridge4, bridge5, bridge6;


//Mountain Borders
var screenBorders = []
var screenBorder1,screenBorder2;

//bridgeKey
var bridgeBorder
function Boundries() {

    //Creating LightGreen Grass Boundries and Hiding them
    lightGreenBoundry0 = createSprite(-470, -350, 300, 10)
    lightGreenBoundry0.visible = false

    lightGreenBoundry1 = createSprite(-605, -260, 10, 200)
    lightGreenBoundry1.visible = false

    lightGreenBoundry2 = createSprite(-650, -150, 100, 10)
    lightGreenBoundry2.visible = false

    lightGreenBoundry3 = createSprite(-695, 20, 10, 330)
    lightGreenBoundry3.visible = false

    lightGreenBoundry4 = createSprite(-650, 175, 100, 10)
    lightGreenBoundry4.visible = false

    lightGreenBoundry5 = createSprite(-605, 235, 10, 100)
    lightGreenBoundry5.visible = false

    lightGreenBoundry6 = createSprite(-365, 265, 470, 10)
    lightGreenBoundry6.visible = false

    lightGreenBoundry7 = createSprite(-134, 325, 10, 100)
    lightGreenBoundry7.visible = false

    lightGreenBoundry8 = createSprite(-74, 370, 100, 10)
    lightGreenBoundry8.visible = false

    lightGreenBoundry9 = createSprite(60, 325, 10, 100)
    lightGreenBoundry9.visible = false

    lightGreenBoundry10 = createSprite(250, 115, 10, 400)
    lightGreenBoundry10.visible = false

    lightGreenBoundry11 = createSprite(165, 265, 200, 10)
    lightGreenBoundry11.visible = false

    lightGreenBoundry12 = createSprite(160, -110, 10, 100)
    lightGreenBoundry12.visible = false

    lightGreenBoundry13 = createSprite(61, -155, 200, 10)
    lightGreenBoundry13.visible = false

    lightGreenBoundry14 = createSprite(-35, -200, 10, 100)
    lightGreenBoundry14.visible = false

    lightGreenBoundry15 = createSprite(-185, -260, 280, 10)
    lightGreenBoundry15.visible = false

    lightGreenBoundry16 = createSprite(-320, -305, 10, 100)
    lightGreenBoundry16.visible = false

    lightGreenBoundry17 = createSprite(203,-70,100,10)
    lightGreenBoundry17.visible = false

    //Pushing all boundries in the 'lightGreenBoundry' Array
    lightGreenBoundry.push(lightGreenBoundry0, lightGreenBoundry1, lightGreenBoundry2, lightGreenBoundry3,
        lightGreenBoundry4, lightGreenBoundry5, lightGreenBoundry6, lightGreenBoundry7, lightGreenBoundry8,
        lightGreenBoundry9, lightGreenBoundry10, lightGreenBoundry11, lightGreenBoundry12, lightGreenBoundry13,
        lightGreenBoundry14, lightGreenBoundry15, lightGreenBoundry16,lightGreenBoundry17);

    //Creating Bridge Boundries and Hiding them
    bridge1 = createSprite(-14, 535, 10, 400);
    bridge1.visible = false

    bridge2 = createSprite(55, 535, 10, 400);
    bridge2.visible = false

    bridge3 = createSprite(1045, 40, 10, 200);
    bridge3.visible = false

    bridge4 = createSprite(1105, 40, 10, 200);
    bridge4.visible = false

    bridge5 = createSprite(1330, -345, 10, 130);
    bridge5.visible = false

    bridge6 = createSprite(1390, -345, 10, 170);
    bridge6.visible = false
    //Pushing all boundries in the 'bridges' Array
    bridges.push(bridge1, bridge2, bridge3, bridge4, bridge5, bridge6)


    //Creating DarkGreen GrassBoundries and Hiding them

    darkgreenBoundry1 = createSprite(250, 1135, 200, 10);
    darkgreenBoundry1.visible = false

    darkgreenBoundry2 = createSprite(160, 1090, 10, 100);
    darkgreenBoundry2.visible = false

    darkgreenBoundry3 = createSprite(-30,1045,390, 10);
    darkgreenBoundry3.visible = false

    darkgreenBoundry4 = createSprite(-230, 1000, 10, 100);
    darkgreenBoundry4.visible = false

    darkgreenBoundry5 = createSprite(-275,955,100, 10);
    darkgreenBoundry5.visible = false

    darkgreenBoundry6 = createSprite(-320,880, 10, 170);
    darkgreenBoundry6.visible = false

    darkgreenBoundry7 = createSprite(-215,805, 180,10);
    darkgreenBoundry7.visible = false

    darkgreenBoundry8 = createSprite(-120, 760, 10, 100);
    darkgreenBoundry8.visible = false

    darkgreenBoundry9 = createSprite(-75, 710, 100, 10);
    darkgreenBoundry9.visible = false

    darkgreenBoundry10 = createSprite(110, 710, 100, 10);
    darkgreenBoundry10.visible = false

    darkgreenBoundry11 = createSprite(160, 660, 10, 100);
    darkgreenBoundry11.visible = false

    darkgreenBoundry12 = createSprite(300, 610, 300, 10);
    darkgreenBoundry12.visible = false

    darkgreenBoundry13 = createSprite(445, 655, 10, 100);
    darkgreenBoundry13.visible = false

    darkgreenBoundry14 = createSprite(490, 715, 100, 10);
    darkgreenBoundry14.visible = false

    darkgreenBoundry15 = createSprite(535, 760, 10, 100);
    darkgreenBoundry15.visible = false

    darkgreenBoundry16 = createSprite(590, 805, 100, 10);
    darkgreenBoundry16.visible = false

    // darkgreenBoundry17 = createSprite(1330, -345, 10, 170);
    // darkgreenBoundry17.visible = false

    darkgreenBoundry18 = createSprite(590, 940, 100, 10);
    darkgreenBoundry18.visible = false

    darkgreenBoundry19 = createSprite(535, 1000, 10, 100);
    darkgreenBoundry19.visible = false

    darkgreenBoundry20 = createSprite(445, 1040, 200, 10);
    darkgreenBoundry20.visible = false

    darkgreenBoundry21 = createSprite(355, 1090, 10, 100);
    darkgreenBoundry21.visible = false

    //Pushing all boundries in the 'darkgreenBoundry' Array
    
    darkgreenBoundry.push(darkgreenBoundry1, darkgreenBoundry2, darkgreenBoundry3, darkgreenBoundry4,
        darkgreenBoundry5, darkgreenBoundry6, darkgreenBoundry7, darkgreenBoundry8, darkgreenBoundry9, darkgreenBoundry10,
        darkgreenBoundry11, darkgreenBoundry12, darkgreenBoundry13, darkgreenBoundry14, darkgreenBoundry15, darkgreenBoundry16,
        darkgreenBoundry18, darkgreenBoundry19, darkgreenBoundry20, darkgreenBoundry21)

     //Creating Screen Borders and Hiding them
    screenBorder1 = createSprite(960,-550,2000,10)
    screenBorder2 = createSprite(1600,-260,10,1000)
    //Pushing all boundries in the 'screenBorders' Array
    screenBorders.push(screenBorder1,screenBorder2);

    //Creating bridge border and Hiding it
    bridgeBorder = createSprite(10,357,70,10)
    bridgeBorder.visible = false

}

 