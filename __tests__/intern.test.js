const Intern = require("../src/employee/intern.js");

const intern_obj = new Intern("Tuan", 1, "tuanle@gmail.com", "gatech");

describe("Team intern", () => {
  it("should return the name of the intern", () => {
    expect("Tuan").toEqual(intern_obj.getName());
  });
  it("should return the id of the intern", () => {
    expect(1).toEqual(intern_obj.getID());
  });
  it("should return the email of the intern", () => {
    expect("tuanle@gmail.com").toEqual(intern_obj.getEmail());
  });
  it("should return the github user of the intern", () => {
    expect("gatech").toEqual(intern_obj.getSchool());
  });
  it("should return the role of the intern", () => {
    expect("Intern").toEqual(intern_obj.getRole());
  });
});
