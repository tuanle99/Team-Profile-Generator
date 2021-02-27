const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, office_number) {
    super(name, id, email);
    this.office_number = office_number;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOfficenumber() {
    return this.office_number;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
