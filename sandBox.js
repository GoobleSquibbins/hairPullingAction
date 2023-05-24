let age = 25;
let year = 2019;

console.log(age, year);

age = 26;
year = 2020;
console.log(age, year);

const points = 100;
console.log(points);

let x = ['delta', 'whiskey', 'alpha', 'romeo', 'victor', 'echo', 'sierra'];
let y = ['echo', 'lima', 'victor', 'echo', 'sierra'];

//array join
let xJoin = x.join("ー");
let yJoin = y.join("ー");

console.log(xJoin);
console.log(yJoin);

//concat

let xyArray = x.concat(y);
console.log(xyArray);

//if case

// let nilai = prompt("input da nilai brudda : ");

// if ( isNaN(nilai)) {
//     document.writeln("Number only");
// }

// if(nilai >= 80 && nilai <= 100){
//     let grade = 'A';
//     console.log(nilai, grade);
// }
// if(nilai >= 70 && nilai < 80){
//     let grade = 'B';
//     console.log(nilai, grade);
// }
// if(nilai >= 60 && nilai < 70){
//     let grade = 'C';
//     console.log(nilai, grade);
// }
// if(nilai >= 50 && nilai < 60){
//     let grade = 'D';
//     console.log(nilai, grade);
// }
// if(nilai <= 50 && nilai > 0){
//     let grade = 'E';
//     console.log(nilai, grade);
// }
// if(nilai < 0){
//     console.log("how do you even get that low man");
// }


let daFunc = () => {
    let inString = prompt("Input String");
    let uno = inString.split(" ")
    let dos = uno.map((idk) => {
        return idk.split("").join("@")
    });
    let quatro = dos.join(" ");
    document.getElementById("out").innerHTML =
        quatro;
}

let order = () => {
    let data = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 },
        { name: "John", age: 35 },
        { name: "Alice", age: 28 },
    ];
    let ord = data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    let final = [];
    for (i = 0; i < ord.length; i++) {
        if (i == 0 || ord[i].name !== ord[i - 1].name) {
            final.push(ord[i]);
        }
    }
    document.getElementById("list").innerHTML =
        "Name : " + final[0].name + " " + "Age : " + final[0].age + "<br>" +
        "Name : " + final[1].name + " " + "Age : " + final[1].age + "<br>" +
        "Name : " + final[2].name + " " + "Age : " + final[2].age + "<br>";
    console.log(final);
}

let letsgetthisoverwith = () => {
    let inAngka = prompt("Masukan Angka, Pisahkan menggunakan spasi");
    let arrA = inAngka.split(" ").map(Number);
    let plswork = [];
    var sum = 0;
    for (let i = 0; i < arrA.length; i++) {
        sum += arrA [i];
        plswork.push(sum);
    }
    document.getElementById("inAngka").innerHTML = arrA;
    document.getElementById("outAngka").innerHTML = plswork;
}
