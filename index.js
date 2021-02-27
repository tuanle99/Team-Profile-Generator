const fs = require("fs");
const inquirer = require("inquirer");
const questions_to_ask = require("./src/questions.js");
const Employee = require("./src/employee.js");
const team_data = require("./src/page-template");

let member_list = [];
let add_next_member = true;
let current_member = "Team Manager";

function ask_question(member_type) {
  let other = "";
  inquirer.prompt(questions_to_ask(member_type)).then((response) => {
    switch (member_type) {
      case "Team Manager":
        other = response.office_number;
        break;
      case "Engineer":
        other = response.git_user;
        break;
      case "Intern":
        other = response.school;
        break;
    }
    const data = new Employee(
      member_type,
      response.name,
      response.id,
      response.email,
      other
    );
    member_list.push(data);

    if (response.add_member === "Exit") {
      add_next_member = false;
      writeToFile("index.html", team_data(member_list));
    } else {
      ask_question(response.add_member);
    }
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err, result) {
    if (err) console.log("error", err);
  });
}

function init() {
  ask_question(current_member);
}

init();
