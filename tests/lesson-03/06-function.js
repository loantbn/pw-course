//bai 1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); 

//bai 2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(5, 2, 8)); 

//bai 3
function getTopStudents(students, threshold) {
    return students.filter(student => student.score >= threshold).map(student => student.name);
}
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 78 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 65 }
];
const result = getTopStudents(students, 80);
console.log(result);

//bai 4
function calculateInterest(principal, rate, time) {
    return (principal + principal * rate * time) / 100;
}   
console.log(calculateInterest(1000, 5, 8));