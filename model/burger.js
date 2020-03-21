class Burger {
    constructor(name) {
        this.name = name;
        this.devoured = false;
    }
};

module.exports = Burger;

//Wanted to keep this in the model, but had to directly put it in the front end javascript because I couldn't require it from the js embedded in the html.
//Is there a better way to do this?