//display the pets in list items
function displayPet(){
//creating the text
    let tmp="";//clear the field
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`<li>${pet.name} --- ${pet.age}</li> `;
        //concatenation
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML=tmp;
}
//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet= petSalon.pets[i];
        tmp+=`
        <div id="${pet.id}" class="pet">
            <div class="pet-header">
                <h4>${pet.name}</h4>
                <button onclick="deletePet(${pet.id});">🐾</button>
            </div>
            <label>${pet.age}</label>
            <label>${pet.gender}</label>
            <label>${pet.breed}</label>
            <label>${pet.Owner}</label>
            <label>${pet.Phone}</label>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}

//display the pets in table