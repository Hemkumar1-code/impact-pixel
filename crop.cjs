const Jimp = require('jimp');

Jimp.read('public/logo.png').then(image => {
    // Top left pixel color is the background white. Jimp autocrop removes it.
    image.autocrop();
    
    // Optional: make true white transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        var red = this.bitmap.data[idx + 0];
        var green = this.bitmap.data[idx + 1];
        var blue = this.bitmap.data[idx + 2];
        if (red > 250 && green > 250 && blue > 250) {
            this.bitmap.data[idx + 3] = 0; // Alpha 0
        }
    });

    image.write('public/logo.png', () => {
        console.log("cropped successfully");
    });
}).catch(err => {
    console.error(err);
});
