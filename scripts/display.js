//display the pets in list items
function displayPet(){
    //creating the text
    let petsDiv = document.getElementById("pets");
    petsDiv.innerHTML="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp=`
        <div class="pet">
            <h4>${pet.name}</h4>
            <label>${pet.age}</label>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}
//display the pets in cards

//display the pets in table