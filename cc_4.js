//U9414-0233

accelerate_KPHvalue = 10
brake_KPHvalue = 5

EVaccelerate_KPHvalue = 20
EVaccelerate_chargePercentDecrease = 1

class Car {
    constructor(make, currentKPH) {
      this.make = make;
      this.currentKPH = Number(currentKPH);
    }
    //Acceleration method
    accelerate() {
        this.currentKPH += accelerate_KPHvalue;
        console.log ("The new speed of the " + this.make + " after accelerating " + accelerate_KPHvalue + "KM/h is " + this.currentKPH + "KM/h.");
    }
    //Brake method
    brake() {
        this.currentKPH -= brake_KPHvalue;
        console.log ("The new speed of the " + this.make + " after braking " + brake_KPHvalue + "KM/h is " + this.currentKPH + "KM/h.");
    }
}
//Extend the Car class to create an EV class that also includes a charge property representing the current battery charge in percentage.
class EV extends Car {
    constructor(charge) {
        this.charge = charge;
    }
    //Implement a chargeBattery method in the EV class that takes an argument chargeTo and sets the battery charge to this value.
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }
    //Override the accelerate method in the EV class to increase the car's speed by 20 km/h and decrease the battery charge by 1%.
    accelerate() {
        this.currentKPH += accelerate_KPHvalue;
        this.charge -= EVaccelerate_chargePercentDecrease;
        //Log the new speed and charge level in the console with a message like: "Tesla going at 140 km/h, with a charge of 22%"
        console.log (this.make + "going at "+ this.currentKPH + "km/h, with a charge of " + this.charge + "%.");
    }
    
}