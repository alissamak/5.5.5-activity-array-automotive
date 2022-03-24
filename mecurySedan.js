//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

//car class
class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        //extending parameters from parent class Vehicle
        super(make, model, year, color, mileage);
        //adding parameters from activity table
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    //method for if passenger less than maxPass then available room (num)
    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
            if((this.passenger + num) <= this.maximumPassengers){
                console.log('Perfect! Everyone can load up.')
                this.passenger = num;
                return this.passenger;
            }
            else{
                console.log(`Oh no! There is not enough room for all the passengers in this ${this.make} and ${this.model}`)
            }
        }
        else{
            console.log(`Sorry! This ${this.make} ${this.model} is full now.`)
        }
    }

    //method for if fuel is greater than 0, then start is true
    start(){
        if(this.fuel > 0){
            console.log('Yay! You have enough fuel to drive.')
            return this.started == true;
        }
        else{
            console.log('Uh oh! You have no fuel!')
            return this.started == false;
        }
    }

    //method for if mileage is greater than 30,000
    schService(){
        if(this.mileage > 30000){
            console.log('Time to schedule service.')
            return this.scheduleService == true;
        }
    }
}


let myCar = new Car("Mecury", "Sedan", "1965", "red", 50000)
myCar.start()
myCar.loadPassenger(5)
myCar.schService()

console.log(myCar)