
function assignmentHeader(n) {
    line();
    line();
    console.log("Assignment " + n + ")");
    console.log("---------------------------------");
}
;

function p(n) {
    console.log(n);
}
;

function line(){
    console.log();
}


//A
assignmentHeader("A");
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
p("boys:");
boys.forEach(p);
line();
p("girls:");
girls.forEach(p);


//B
assignmentHeader("B");
var all = boys.concat(girls);

console.log("all:");
all.forEach(p);
line();

//Trying to find out if concat change the original arrays
p("boys:");
boys.forEach(p);
line();
p("girls:");
girls.forEach(p);
//Answer: It does not change the original arrays


//C
assignmentHeader("C");
var allComma = all.join(",");
var allHyphen = all.join("-");
p("allComma:");
p(allComma);
line();
p("allHyphen:");
p(allHyphen);


//D
assignmentHeader("D");
all.push("Lone", "Gitte");
p(all.join(","));

//E
assignmentHeader("E");
all.unshift("Hans", "Kurt");
p(all.join());

//F
assignmentHeader("F");
p("Removing Hans, the first index in the array");
all.shift(1);
p(all.join());

//G
assignmentHeader("G");
p("Removing Gitte, the last index in the array");
all.pop(1);
p(all.join());

//H
assignmentHeader("H");
p("Removing Ole and Janne from the middle of the array");
all.splice(3,2);
p(all.join());

//I
assignmentHeader("I");
p("Reversing the order of the array");
all.reverse();
p(all.join());

//J
assignmentHeader("J");
p("Sorting the array");
all.sort();
p(all.join());


//K
assignmentHeader("K");
p("Custom sorting, treating capital and non-capital letters alike");
function customeCompare(n1, n2){
    var bigN1 = n1.toString().toUpperCase();
    var bigN2 = n2.toString().toUpperCase();
    return bigN1.localeCompare(bigN2);
}
all.sort(customeCompare);
p(all.join());

//L
assignmentHeader("L");
var allUpper = all.map(str => str.toUpperCase());
p(allUpper.join());


//M
assignmentHeader("M");
var allWithL = all.filter(str => str.toUpperCase().charAt(0) === "L");
p(allWithL.join());