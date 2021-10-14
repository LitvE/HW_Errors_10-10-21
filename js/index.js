class checkColor{
    constructor(value){
        if(value < 0 || value >  255) throw new RangeError('Color value is not in the range (0..255)');

        if(isNaN(value)) throw new TypeError('The value must be a Number');
        this.value = value;
    }

}

class checkAlpha{
    constructor(value){
        if(value < 0 || value >  1) throw new RangeError('Alpha value is not in the range (0..1)');

        if(isNaN(value)) throw new TypeError('The value must be a Number');
        this.value = value;
    }
}

class checkRGBA {
    constructor(colors, alpha){
        try{
            let checkedColors = [];
            colors.forEach(color => {
                let checkedColor = new checkColor(color);
                checkedColors.push(checkedColor.value);
            });
            let checkedAlpha = new checkAlpha(alpha);
            this.colors = checkedColors;
            this.alpha = checkedAlpha.value;
        } catch(error){
            console.log(error);
        }

    }

    printRGBA(){
        try{
            console.log(`rgba(${this.colors.join(', ')}, ${this.alpha})`);
        } catch (error){
            console.log(error);
        }
    } 
}

const rgba1 = new checkRGBA([10, 250, 100], 0.5);
rgba1.printRGBA();

const rgba2 = new checkRGBA([10, -250, 100], -2);
rgba2.printRGBA();

const rgba3 = new checkRGBA([10, 'test', 100], -2);
rgba3.printRGBA();