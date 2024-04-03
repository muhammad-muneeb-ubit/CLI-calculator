import inquirer from "inquirer";

const result = await inquirer.prompt([
  {
    message: "Enter your First Number: ",
    type: "number",
    name: "firstNumber"
  },
  {
    message: "Enter your Second Number: ",
    type: "number",
    name: "secondNumber"
  },
  {
    message: "Select one of the operator: ",
    type: "list",
    name: "operator",
    choices:["Addition", "Subtraction", "Multiplication","Division"]
  },
]);
if (result.operator === "Addition") {
    console.log(`Your result is: ${result.firstNumber + result.secondNumber}`)
} else if (result.operator === "Subtraction") {
    console.log(`Your result is: ${result.firstNumber - result.secondNumber}`)
}
 else if (result.operator === "Multiplication") {
    console.log(`Your result is: ${result.firstNumber * result.secondNumber}`)
}
 else if (result.operator === "Division") {
    console.log(`Your result is: ${result.firstNumber / result.secondNumber}`)
} else{
    console.log("You select invalid operator!")
}