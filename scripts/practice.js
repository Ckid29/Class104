//arrays []

// objects literal{}

//these are local vars <---------------->
    function Students(fname,lname,age,isActive){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
        this.isActive=isActive;
    }

let student1= new Students("Astrid", "Batres-Guerrero",25,true);
let student2=new Students("Alexis","Aldrete",25,true);

console.log(student1,student2);

//displayStudent();

