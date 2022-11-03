console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
constructor(name, pets, residence, hobbies){
this.name = name;
this.pets = pets;
this.residence = residence;
this.hobbies = hobbies;
}
    addHobby(hobby){
    this.hobbies.push(hobby)
    }

    removeHobby(hobby){
    this.hobbies = this.hobbies.filter((currHobby) => {
    if ( currHobby == hobby ){
    return false;}
    
    else {return true;}
        })
    }
    greeting(){
    console.log("hello fellow person!")
    }

}


const person01 = new Person("Sam", 9, "Tulsa", ["drinking", "smoking", "running", "hunting"] )

console.log (person01)
console.log(person01.greeting())
console.log(person01.removeHobby("running"))


class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
}  
greeting(){ 
    console.log( `Hello there!, my name is ${this.name} and i am a  ${this.occupation}`)};
}
let person02 = new Coder("Luis", 1, "New Jersey", ["working out", "shopping", "diy"]);

console.log(person02.greeting())

console.log(person02)



class Calculator{
result = 0;

    add(a,b){
    if(b){this.result = a + b;
    return this.result;}
    else {
        this.result = this.result + a;
        return this.result;
    }
    }
    
    subtract(a, b){
    if(b || b == 0){this.result = a - b;
    return this.result;}
    else {
        this.result = this.result - a;
        return this.result;
    }
    }       
    
    multipy(a, b){
    if(b || b == 0){this.result = a * b;
    return this.result;}}


    divide(a,b){
    if(b || b == 0){this.result = a/b;
    return this.result;}
    }

    display(){
    return this.result;       
    }
}

let calc = new Calculator();
calc.add(1,3)
calc.divide(10000, 45)

