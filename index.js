import Color from "./Color.js";

const color = new Color();

// setInterval(() => {
//     document.body.style.backgroundColor = color.new_shade(color.random(), 150);
// }, 1000);


let pattern = color.parallel({
    angle: 90,
    background: "#00ccd6",
    col: "white",
    percent: {
        a: 50,
        b: 20
    },
    size: {
        a: 80,
        b: 200
    }
});

document.body.style.backgroundColor = pattern.backgroundColor
document.body.style.backgroundImage = pattern.backgroundImage
document.body.style.backgroundSize = pattern.backgroundSize