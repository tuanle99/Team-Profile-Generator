const manager_questions = {
  type: "input",
  message: "What is the team manager's office number?: ",
  name: "office_number",
};

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

const add_member = {
  type: "list",
  message: "add a new member?: ",
  name: "add_member",
  choices: ["Engineer", "Intern", "Exit"],
};

function questions_to_ask(member) {
  let list_of_questions = [
    {
      type: "input",
      message: `What is the ${member}'s name?: `,
      name: "name",
    },
    {
      type: "input",
      message: `What is the ${member}'s employee ID?: `,
      name: "id",
    },
    {
      type: "input",
      message: `What is the ${member}'s email?: `,
      name: "email",
    },
  ];

  switch (member) {
    case "Team Manager":
      list_of_questions.push(manager_questions);
      break;
    case "Engineer":
      list_of_questions.push(engineer_questions);
      break;
    case "Intern":
      list_of_questions.push(intern_questions);
      break;
  }

  list_of_questions.push(add_member);

  return list_of_questions;
}

module.exports = questions_to_ask;
