class Employee {
  constructor(type, name, id, email, other) {
    this.type = type;
    this.name = name;
    this.id = id;
    this.email = email;
    switch (type) {
      case "Team Manager":
        this.office_number = other;
        break;
      case "Engineer":
        this.git_user = other;
        break;
      case "Intern":
        this.school = other;
        break;
    }
  }
}

module.exports = Employee;
