let petsSalon = {
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
let c=0;//this is a counter var
//name,age,gender,breed,service, owner name, contact phone
function Pet(name,age, gender,breed,service,Owner,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=Owner;
    this.phone=contactPhone;  
    this.id=c++; //increase the var 1 everytime that is used
}

//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel"); 

function isValid(aPet){
    
    let valid=true;
    if(aPet.name.length==0){
        //if we get here it means that the name is not valid
       valid=false;
       console.error("Invalid name");
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid name");
    }
    if(aPet.phone.length==0){
        valid=false;
        console.error("Invalid name");
    }
    return valid;
}

function register(){
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputcontactPhone.value);
    if(isValid(thePet)){
        petsSalon.pets.push(thePet);
        displayCards();

        clearInputs();
    }

}

function clearInputs(){
    inputname.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

function deletePet(petsId){
    console.log("Deleting" + petsId);
    let deleteIndex;
    //previous actions----
        //we need an id in the pet constructor
        //we need a delete button in the html
    for(let i=0;i<petsSalon.pets.length;i++){
        let pet = petsSalon.pets[i];
        if(petsId==pets.id){

            deleteIndex=i;
            console.log("I found it in position:" + i);
        }
    }
    //in this function ------
        //travel the array (for loop)
        //find the id (if)
        //get the position in the array (store in a variable)
        //remove from the array(splice))
        petsSalon.pets.splice(deleteIndex,1);
        //remove from the html (remove))
        document.getElementById(petsId).remove();
        //display to the user a message
    //    
}

function searchPet(){
   
    // in this function -------
        //travel the array(for loop)
        let searchString = document.getElementById("txtSearch").value;
        console.log("Searching" + searchString);
    for(let i=0;i<petsSalon.pets.length;i++){
        let pets = petsSalon.pets[i];
        // find the id (if)
        if(searchString.toLowerCase() === pet.name.toLowerCase()){
            //highlight the result
            document.getElementById(pets.id).classList.add("highlight");
        }else{
            document.getElementById(pets.id).classList.remove("highlight");
        }
    }
}
let Janet= new Pet("Janet", "18", "male", "germansheppherd", "vet", "Johnathan", "2069452064");
let Regina= new Pet("Regina", "9", "female", "Greyhound", "yes", "Shakira", "2533301698");
let Gretchen= new Pet("Gretchen", "3", "male", "Bulldog", "yes", "Usher", "8566253039");
petsSalon.pets.push(Janet,Regina,Gretchen);
displayCards();
//Create three pets