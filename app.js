// let student = {
//     firstName: "Areeba",
//     lastName: "Huzaifa",
//     Roll_no: 224174,
//     age: 22,
//     class: "XI",
//     fullName: function(){
//         return this.firstName + this.lastName;
//     }

// }
// console.log(student);
// console.log(student.fullName());



function Student(name, father_name, age, cls){
    this.name = name;
    this.fatherName = father_name;
    this.age = age;
    this.class = cls;
    this.nationality = this.nationality;
    this.fullName = function(){
        return this.name + " " + this.fatherName
    }

}


let student1 = new Student("Ali Khan", "Asad Khan", 34, "XI");
let student2 = new Student("Saad", "Raza Khan", 44, "XII")

student1.nationality = "Pakistani"


console.log(student1);
console.log(student2);



// function Plan(name, price, space, transfer, pages){
//     this.doc = name;
//     this.grumpy = price;
//     this.sleepy = space;
//     this.bashful = transfer;
//     this.sneezy = pages

// }
// console.log(Plan);


// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = this.nationality
// }

//     const myFather = new Person("John", "Doe", 50, "blue");
//     const myMother = new Person("Sally", "Rally", 48, "green");
     

//     Person.nationality = "English";
//     console.log(Person);
//     // document.getElementById("demo").innerHTML = "The nationality of my father is " + myFather.nationality; 





