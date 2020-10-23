bubbly({
    colorStart: "#DCDCDC",
    colorStop: "#DCDCDC",
    blur: 1,
    compose: "source-over",
    radiusFunc: () => 4 + Math.random() * 25,
    // hsla(H,S%,L%,a) 
    // H is the hue measured in degrees of the color circle (red = 0�; green = 120�; blue = 240�)
    // S is the saturation (100% full saturation, 0% is a shade of gray)
    // L is the lightness (100% is white, 0% is black, 50% is 'normal')
    // The alpha (a) is the opacity of the color (a = 0 = transparent; a = 1 = opaque)
    bubbleFunc: () => "hsl(60,50%,50%,0.5)"

});
