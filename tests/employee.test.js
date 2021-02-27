const Employee = require("../src/employee");

const manager_obj = new Employee(
  "Team Manager",
  "Tuan",
  1,
  "tuanle@gmail.com",
  0
);

describe("Team Manager", () => {
  it("should return the name of the manager", () => {
    expect("Team Manager").toEqual(manager_obj.type);
  });
  it("should return the name of the manager", () => {
    expect("Tuan").toEqual(manager_obj.name);
  });
  it("should return the name of the manager", () => {
    expect(1).toEqual(manager_obj.id);
  });
  it("should return the name of the manager", () => {
    expect("tuanle@gmail.com").toEqual(manager_obj.email);
  });
  it("should return the name of the manager", () => {
    expect(0).toEqual(manager_obj.office_number);
  });
});
