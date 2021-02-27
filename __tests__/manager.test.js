const Manager = require("../src/employee/manager.js");

const manager_obj = new Manager("Tuan", 1, "tuanle@gmail.com", 0);

describe("Team Manager", () => {
  it("should return the name of the manager", () => {
    expect("Tuan").toEqual(manager_obj.getName());
  });
  it("should return the id of the manager", () => {
    expect(1).toEqual(manager_obj.getID());
  });
  it("should return the email of the manager", () => {
    expect("tuanle@gmail.com").toEqual(manager_obj.getEmail());
  });
  it("should return the office number of the manager", () => {
    expect(0).toEqual(manager_obj.getOfficenumber());
  });
  it("should return the role of the manager", () => {
    expect("Manager").toEqual(manager_obj.getRole());
  });
});
