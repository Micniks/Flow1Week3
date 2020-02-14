
function assignmentHeader(n) {
    line();
    line();
    console.log("Assignment " + n + ")");
    console.log("---------------------------------");
}
;

function assignmentSectionHeader(n) {
    line();
    line();
    line();
    line();
    line();
    console.log("     " + n + "");
    console.log("============================================================");
    console.log("------------------------------------------------------------");
}
;

function p(n) {
    console.log(n);
}
;

function line() {
    console.log();
}


//Assignment JavaScript functions and Callbacks
assignmentSectionHeader("JavaScript functions and Callbacks");

//Assignment 1
assignmentHeader("1");

function add(n1, n2) {
    return n1 + n2;
}
;

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};
p("All functions in assignment introduced into the code");


//Assignment 2
assignmentHeader("2");
p("Code: console.log( add(1,2) )");
p("This will Print 3, because the function returns a 3");
line();
p("Code: console.log( add )");
p("This will print the standing setup for a functions toString method, in the case of nano being '[Function: add]'");
line();
p("Code: console.log( add(1,2,3) )");
p("This will print 3, as the function does not care about further parameters beyond what it uses. The interrest part here is that it will still take them.");
line();
p("Code: console.log( add(1) )");
p("This will print NaN, standing for NaN, as it cannot see the last parameter as a number, since there is no last paramter. It is however interresting, that the code do not just fail.");
line();
p("Code: console.log( cb(3,3,add) )");
p("This will use the function cb, and print out the text with the numbers, and the result from the given function, in this case add which give 6");
line();
p("Code: console.log( cb(4,3,sub) )");
p("This will use the function cb, and print out the text with the numbers, and the result from the given function, in this case sub which give 1");
line();
p("Code: console.log(cb(3,3,add()))");
p("This will result in an error, since we have called the method with the parameters, instead of pointed to the function for the callback.");
line();
p("Code: console.log(cb(3,\"hh\",add))");
p("This code will run fine, giving the result 3hh, as adding a string to a number in Javascript simply makes a string as if putting to strings together");
line();


//Assignment 3
assignmentHeader("3");

var cbImproved = function (n1, n2, callback) {
    if (typeof n1 !== "number") {
        throw new Error('First parameter was not a number!');
    } else if (typeof n2 !== "number") {
        throw new Error('Second parameter was not a number!');
    } else if (typeof callback !== "function") {
        throw new Error('Third parameter was not a function!');
    } else {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    }
};

//My own function to better set up the values for viewing when running the file
function tryFunction(f, n1, n2, callback) {
    p("number n1 = " + n1.toString());
    p("number n2 = " + n2.toString());
    p("function callback = " + callback.name);
    p("Result:");
    try {
        p(f(n1, n2, callback));
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
    line();
}

tryFunction(cbImproved, 1, 4, add);
tryFunction(cbImproved, 1, "test", add);
tryFunction(cbImproved, 1, 4, 4);



//Assignment 4
assignmentHeader("4");

var mul = function (n1, n2) {
    return n1 * n2;
};

tryFunction(cbImproved, 3, 4, mul);


//Assignment 5
assignmentHeader("5");

tryFunction(cbImproved, 4, 2, function (n1, n2) {
    return n1 / n2;
});



//Assignment Callbacks (with map, filter and forEach)
assignmentSectionHeader("Callbacks (with map, filter and forEach)");

//Assignment 1
assignmentHeader("1");
var array = ["Michael", "Cahit", "Andreas", "Marcus", "Allan", "Nina", "Caroline", "Tobias", "Bob", "Sam"];
p("coreArray = " + array.join());

var filterArray = array.filter(str => str.length <= 3);
p("filterArray = " + filterArray.join());

//Assignment 2
assignmentHeader("2");
var upperArray = array.map(str => str.toUpperCase());
p("upperArray = " + upperArray.join());

//Assignment 3
assignmentHeader("3");

function arrayAsListHTML(array) {
    var result = "<ul>";
    array.forEach(function (str) {
        result += "<li>" + str + "</li>";
    });
    result += "</ul>";
    return result;
}

p(arrayAsListHTML(array));


//Assignment 4
assignmentHeader("4");

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

p("All cars:");
cars.forEach(p);
line();

var newCars = cars.filter(car => car.year > 1999);
p("Cars newer than 1999:");
newCars.forEach(p);
line();

var volvoCars = cars.filter(car => car.make === 'Volvo');
p("All Volvo’s:");
volvoCars.forEach(p);
line();

var cheapCars = cars.filter(car => car.price < 5000);
p("All cars with a price below 5000:");
cheapCars.forEach(p);
line();

//Assignment 4a
assignmentHeader("4a");

//This code is really ugly, but I could not find a good way to get the values out of each object car with map or join
var sqlInsertCars = function (cars) {
    var result = "INSERT INTO cars (";
    result += Object.getOwnPropertyNames(cars[0]).join();
    result += ") VALUES ";
    cars.forEach(function (car) {
        result += "(";
        for (const[key, value] of Object.entries(car)) {
            result += value + ", ";
        }
        ;
        result = result.substring(0, result.length - 2);
        result += "), ";
    });
    result = result.substring(0, result.length - 2);
    return result;
};

p(sqlInsertCars(cars));


//Assignment Asynchronous Callbacks
assignmentSectionHeader("Asynchronous Callbacks");

//Assignment 1
assignmentHeader("1");

p("I would expect to see the output of the code in the following order:");
p("1. aaa...");
p("2. ddd...");
p("3. fff...");
p("4. eee...");
p("5. bbb...");
line();
p("I expect this order, because the javascript will execute one line at the time, \n\
but when delays are called, they are handeled by another part of the system, \n\
and the execution of the following lines are much quicker then the delay time");


//Assignment 2
assignmentHeader("2");

/*
 var msgPrinter = function(msg,delay){
 setTimeout(function(){
 console.log(msg);
 },delay);
 };
 console.log("aaaaaaaaaa");
 msgPrinter ("bbbbbbbbbb",2000);
 console.log("dddddddddd");
 msgPrinter ("eeeeeeeeee",1000);
 console.log("ffffffffff");
 */

p("My assumption was correct, and having this in the code will make the \n\
rest of it look bad when printed, so I'll comment it out for now");

//Assignment this and constructor functions 
assignmentSectionHeader("this and constructor functions ");

//Assignment 1
assignmentHeader("1");

function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this
    }, 2000);
}

p("This code shows that the inner callback (the delayed one) has a different \n\
object name then the other function, and are each using their own.");
line();

Person("Kurt Wonnegut");
console.log("I'm global: " + name);  //Explain this
line();

p("Because global is not using this to point to the specific name, \n\
it is instead using the one set by the earlier called function.");
line();

p("A function starting with a capital letter is the normal naming convention for\n\
Component function, that affects a react element in the code");


//Assignment 2
assignmentHeader("2");

var per = new Person("Sam Samsong");
console.log("I'm global: " + name);  //What’s different 

p("The difference here is that we pointed the value to a variable, and as such, \n\
it seem it does not go out to the global variable");


//Assignment 3
assignmentHeader("3");

function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
    }.bind(this), 2000);
}


//Assignment 4
assignmentHeader("4");

var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);
var g2 = greeter.bind(comp2);
setTimeout(g1, 500);
setTimeout(g2, 1000);


//Assignment JavaScript Objects
assignmentSectionHeader("JavaScript Objects");

//Assignment 1
assignmentHeader("1");

var object = {race: "Dragon", age: 500, rank: 1, type: "Fire"};

var printObject = function (object) {
    for (this.prop in object) {
        console.log(prop, object[prop]);
    }
};

p("Printing custom object:");
printObject(object);
line();

delete object.age;
p("Printing object with deleted age");
printObject(object);
line();


object.color = "Red";
p("Printing object with added color");
printObject(object);
line();

//Assignment 2
assignmentHeader("2");

function NewPerson(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getDetails = function () {
        return this.firstName + " " + lastName + ", age " + age;
    };
}

var frank = new NewPerson("Frank", "Stone", 25);
p(frank.getDetails());



//Assignment Reusable Modules with Closures
assignmentSectionHeader("Reusable Modules with Closures");

//Assignment 1
assignmentHeader("1");

var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
};
var counter1 = makeCounter();
var counter2 = makeCounter();

//Test
line();
p("Testing here");
p("Increasing Counter1");
counter1.increment();
p("Counter1 increased");
counter1.increment();
p("Counter1 increased");
counter1.increment();
p("Counter1 increased");
line();

p("Increasing Counter2");
p("Counter2 increased");
counter2.increment();
p("Counter2 increased");
counter2.increment();
p("Counter2 increased");
counter2.increment();
p("Counter2 increased");
counter2.increment();
line();

p("Current values of each counter should be:");
p("Current1: Expected 3 Actual " + counter1.value());
p("Current2: Expected 4, Actual " + counter2.value());
line();

p("Decrease value of Counter1");
p("Counter1 decreased");
counter1.decrement();
line();

p("Decrease value of Counter2");
p("Counter2 decreased");
counter2.decrement();
p("Counter2 decreased");
counter2.decrement();
p("Counter2 decreased");
counter2.decrement();
line();

p("Current values of each counter should be:");
p("Current1: Expected 2, Actual " + counter1.value());
p("Current2: Expected 1, Actual " + counter2.value());
line();

//Assignment 2
assignmentHeader("2");

var lastPerson = function () {
    var privateName = "";
    var privateAge = 0;
    function setName(name) {
        privateName = name;
    }
    function setAge(n) {
        privateAge = n;
    }
    return{
        setName: function (newName) {
            setName(newName);
        },
        setAge: function (newAge) {
            setAge(newAge);
        },
        getInfo: function () {
            return privateName + " " + privateAge;
        }
    };
};

var peter = lastPerson();
var frank = lastPerson();
peter.setName("Peter");
peter.setAge(45);
frank.setName("Frank");
frank.setAge(23);
p(peter.getInfo());
p(frank.getInfo());


line();
line();
p("And here are all the delayed messages:");
p("--------------------------------------");