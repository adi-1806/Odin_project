//2. Mehtod invocation
let car = {
    brand: 'Honda',
    getBrand: function(){
        return this.brand;
    }
}
// You get undefined because here 'this' is set to the global object in non-strict mode.
// So you get undefined instead of Honda
let br = car.getBrand;
console.log(br());

// To fix that we use 'bind()' method of Function.prototype object.
let brand = car.getBrand.bind(car);
console.log(car.getBrand());
console.log(brand());

let bike = {
    brand: 'Harley Davidson'
}

// In this eg, bind() method sets the 'this' to the bike object
// therefore you see the value of the brand property of the bike object on the console
let brandName = car.getBrand.bind(bike);
console.log(brandName());


// 3. Constructor invocation

function Vechile(model){
    this.model = model;
}

Vechile.prototype.getBrand = function(){
    return this.model;
}

// the expression new Vechile('Maruti') is a constructor invocation of the Vehcile function
// Js creates a new object and set this to the newly created object.
// If there is no 'new' then this is set to global
let vechile = new Vechile('Maruti');
console.log(vechile.getBrand());


// 4 Indirect Invocation

function getBranded(prefix){
    console.log(prefix + this.branded);
}

let honda = {
    branded: 'Honda'
};

let audi = {
    branded: 'Audi'
};

getBranded.call(honda, "It's a ");
getBranded.call(audi, "It's a ")

getBranded.apply(honda, ["It's a"]);
