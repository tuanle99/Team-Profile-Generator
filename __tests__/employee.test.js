const Employee = require("../src/employee/employee.js");

const employee_obj = new Employee("Tuan", 1, "tuanle@gmail.com");

describe("Team Manager", () => {
  it("should return the name of the employee", () => {
    expect("Tuan").toEqual(employee_obj.getName());
  });
  it("should return the id of the employee", () => {
    expect(1).toEqual(employee_obj.getID());
  });
  it("should return the email of the employee", () => {
    expect("tuanle@gmail.com").toEqual(employee_obj.getEmail());
  });
  it("should return the role of the employee", () => {
    expect("Employee").toEqual(employee_obj.getRole());
  });
});
