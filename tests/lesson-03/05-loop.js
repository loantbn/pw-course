// Bai 1
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// Bai 2
for(let i = 2; i <= 9; i++){
    console.log("Bang cuu chuong " + i);
    for(let j = 1; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j));
    }

}
// Bai 3
const evenNumbers = [];
for(let i = 1; i <= 100; i++){
    if (i !==2){
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);
// Bai 4
for(let i = 1; i <= 10; i++){
 console.log(`user${i}@example.com`);
}

// Bai 5
const revenue = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 300 },
    { month: 5, total: 250 },
    { month: 6, total: 350 },
    { month: 7, total: 400 },
    { month: 8, total: 450 },
    { month: 9, total: 500 },
    { month: 10, total: 550 },
    { month: 11, total: 600 },      
    { month: 12, total: 650 }
]
let totalRevenue = 0;
for(let i =0; i <revenue.length; i++){
    totalRevenue += revenue[i].total;

}
console.log(totalRevenue);