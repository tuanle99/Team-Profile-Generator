const questions = require("../src/questions");

let list_of_questions = [
  {
    type: "input",
    message: `What is the Team Manager's name?: `,
    name: "name",
  },
  {
    type: "input",
    message: `What is the Team Manager's employee ID?: `,
    name: "id",
  },
  {
    type: "input",
    message: `What is the Team Manager's email?: `,
    name: "email",
  },
  {
    type: "input",
    message: "What is the Team Manager's office number?: ",
    name: "office_number",
  },
  {
    type: "list",
    message: "add a new member?: ",
    name: "add_member",
    choices: ["Engineer", "Intern", "Exit"],
  },
];

describe("inquirer", () => {
  it("should return the same text as the array of questions", () => {
    expect(list_of_questions).toEqual(questions("Team Manager"));
  });
});
