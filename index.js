const fs = require("fs");
const inquirer = require("inquirer");
const questions_to_ask = require("./src/questions.js");
const Manager = require("./src/employee/manager.js");
const Engineer = require("./src/employee/engineer.js");
const Intern = require("./src/employee/intern.js");
const team_data = require("./src/page-template");

let member_list = [];
let add_next_member = true;
let current_member = "Team Manager";
let data = {};

function ask_question(member_type) {
  inquirer.prompt(questions_to_ask(member_type)).then((response) => {
    switch (member_type) {
      case "Team Manager":
        data = new Manager(
          response.name,
          response.id,
          response.email,
          response.office_number
        );
        break;
      case "Engineer":
        data = new Engineer(
          response.name,
          response.id,
          response.email,
          response.git_user
        );
        break;
      case "Intern":
        data = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        break;
    }
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
