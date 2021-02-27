const questions = require("../src/questions");

const list_of_questions = [
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

const engineer_questions = {
  type: "input",
  message: "What is the engineer's github username?: ",
  name: "git_user",
};

const intern_questions = {
  type: "input",
  message: "What is the intern's school currently attending?: ",
  name: "school",
};

describe("inquirer", () => {
  it("should return the same text as the array of questions", () => {
    expect(list_of_questions).toEqual(questions("Team Manager"));
  });
  it("should return the same text as the array of questions", () => {
    expect(engineer_questions).toEqual(questions("Engineer")[3]);
  });
  it("should return the same text as the array of questions", () => {
    expect(intern_questions).toEqual(questions("Intern")[3]);
  });
});
