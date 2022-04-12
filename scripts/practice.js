//arrays []

// objects literal{}
let students =[
    {
    //attr:value;
        firstName:"Astrid",
        lastName:"Batres-Guerrero",
        age:25,
        isActive:true
    },
    {
        firstName:"Anthony",
        lastName:"Lane",
        age:22,
        isActive:true
    },   
    {
        firstName:"Ben",
        lastName:"Vance",
        age:25,
        isActive:false,
        hobbies:["Listen Music", "Read", "Play Zelda"],
        address:{
            street:"Palm street",
            zip:"22769",
            number:"262-k"
        }
    }];

console.log(students[0].firstName);

function displayStudent(){
    //travel the array
    let tmp="";
    let div= document.getElementById("students");

        for(let i=0;i<students.length;i++){
        //iteration 1 -----> i=0
            tmp +=`<li>${students[i].firstName}<li>`;
        }
        div.innerHTML=tmp;
    }
    
displayStudent();

