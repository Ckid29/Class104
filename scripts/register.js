let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]
}
//name,age,gender,breed,service, owner name, contact phone
function Pet(name,age, gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    
}
//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputservice=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel"); 

function register(){
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    console.log(thePet);
    petSalon.pets.push(thePet);
    clearInputs();
}
function clearInputs(){
    inputName.value="";
    inputAge.value="";
}
let Janet= new Pet("Janet", "18wks", "male", "germansheppherd", "vet", "Johnathan", "2069452064")
let Regina= new Pet("Regina", "9wks", "female", "Greyhound", "yes", "Shakira", "2533301698")
let Gretchen= new Pet("Gretchen", "3wks", "male", "Bulldog", "yes", "Usher", "8566253039")

console.log(Janet,Regina,Gretchen);
//Create three pets