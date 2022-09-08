class Color {
    constructor() {}

    random() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }

    new_shade(col, amt) {
        this.usePound = false;

        if (col[0] == "#") {
            col = col.slice(1);
            this.usePound = true;
        }

        this.num = parseInt(col, 16);


        this.r = (this.num >> 16) + amt;

        if (this.r > 255) {
            this.r = 255;
        } else if (this.r < 0) {
            this.r = 0;
        }

        this.b = ((this.num >> 8) & 0x00FF) + amt;
        if (this.b > 255) {
            this.b = 255;
        } else if (this.b < 0) {
            this.b = 0;
        }

        this.g = (this.num & 0x0000FF) + amt;

        if (this.g > 255) {
            this.g = 255;
        } else if (this.g < 0) {
            this.g = 0;
        }
        return (this.usePound ? "#" : "") + (this.g | (this.b << 8) | (this.r << 16)).toString(16);

    }

    parallel(colObj = {
        angle,
        background,
        col,
        percent,
        size
    }) {
        return {
            backgroundColor: `${colObj.background}`,
            backgroundImage: `linear-gradient(${colObj.angle}deg, transparent ${colObj.percent.a}%, ${colObj.col} ${colObj.percent.b}%)`,
            backgroundSize: `"${colObj.size.a}px ${colObj.size.b}px"`
        }
    }
}

export default Color;