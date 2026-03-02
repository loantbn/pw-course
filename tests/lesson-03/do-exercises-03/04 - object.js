//Bai 1
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
   
}
console.log(car.year);

//Bai 2
let person = {
    name: "John",
    address:{
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
}
console.log(person.address.street);

//Bai 3
let student = {
    name: "Alice",
    grades: {
        math: 85,
        english: 90
    }
}
console.log(student.grades.math + " " + student.grades.english);

//Bai 4
let settings = {
    volume: 50,
    brightness: 70
}
settings.volume = 75;
console.log(settings.volume);

//Bai 5
let bike = {
    color: "red"
}
console.log(bike.color);

//Bai 6
let employee = {
    name: "Bob",
    age: 30
}
delete employee.age;
console.log(employee);

//Bai 7
const school = {
    classA:["An", "Binh", "Chau"],
    classB:["Dao", "Huong", "Giang"]
}
console.log(school);