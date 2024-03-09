"use strict";
let animals = ["cat", "cow", "rabbit"];
for (let animal of animals) {
    if (animal === "cat") {
        console.log(`${animal} like milk.`);
    }
    else if (animal === "cow") {
        console.log(`${animal} is my favorite animal.`);
    }
    else {
        console.log(`${animal} is very cute.`);
    }
}
console.log("all of these are cute.");
