// const luckyNumber = 7;
// console.log("The lucky number is " + luckyNumber)

// let, const

const score = 10;

console.log(score);

const myName = 'jean';
PrintVariableType(myName);

const myEmptyString = "";
PrintVariableType(myEmptyString);

const age = 31;
console.log(`Type of ${age}: ${typeof(age)}`);
PrintVariableType(myEmptyString);

const rating = 4.5;
PrintVariableType(rating);

const iscool = true;
PrintVariableType(iscool);

const myNullValue = null;
PrintVariableType(myNullValue);

const myUndefinedValue = undefined;
PrintVariableType(myUndefinedValue);

const myObject = {id : "00125", firstName: "John", lastName: "Makeen", school: "NewYork highschool"}
PrintVariableType(myObject);

let myVariable;
PrintVariableType(myVariable);

function PrintVariableType(input){
    console.log(`Type of ${input}: ${typeof(input)}`);
}