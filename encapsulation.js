//Encapsulation


//Example 1:
class car{
    constructor()
    {
        let car_name,car_model;
    }

    getname(){
        this.car_name;
    }
    setname(name){
        this.car_name=name;
    }


    getmodel(){
        this.car_model;
    }

    setmodel(model){
        this.car_model=model;
    }

}

let c = new car();

c.setname("Suzuki");
c.setmodel("Ertiga");

console.log(c.getname(),c.getmodel()); //Output : Suzuki Ertiga
