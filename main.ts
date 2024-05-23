#! /usr/bin/env node

import inquirer from "inquirer"

let toDos= [];
let loop="true";

while(loop)
    {

let addTasks = await inquirer.prompt([
    {
        name:"list",
        type:"input",
        message:"What you want to add in your list?",
    },
    {
        name:"addmore",
        type:"confirm",
        message:"Do you want to add more?",
        default:"false"
    }
]);
toDos.push(addTasks.list);
loop=addTasks.addmore
console.log(toDos)
    }