
# ColorJS

ColorJS is an ES6 modules which generate random and new shade of colors.
## Features

- Random colors
- Lightens colors
- Darkens colors


## Usage/Examples
Download folder, insert into your app's main directory and import in your JS file.

```javascript
import Color from '{main-directory}/ColorJS/Color.js';

const color = new Color();
```

# Generate random colors
```javascript
 setInterval(() => {
     document.body.style.backgroundColor = olor.random();
 }, 1000);
```

# Lighten color
```javascript
 const new_color_code = color.new_shade("#fff", 50);
```

# Darkens color
```javascript
 const new_color_code = color.new_shade("#fff", -50;
```

## Authors

- [@DevBadAss](https://www.github.com/DevBadAss)


## License

[MIT](https://choosealicense.com/licenses/mit/)

