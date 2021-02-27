const Engineer = require("../src/employee/engineer.js");

const engineer_obj = new Engineer("Tuan", 1, "tuanle@gmail.com", "tuanle99");

describe("Team engineer", () => {
  it("should return the name of the engineer", () => {
    expect("Tuan").toEqual(engineer_obj.getName());
  });
  it("should return the id of the engineer", () => {
    expect(1).toEqual(engineer_obj.getID());
  });
  it("should return the email of the engineer", () => {
    expect("tuanle@gmail.com").toEqual(engineer_obj.getEmail());
  });
  it("should return the github user of the engineer", () => {
    expect("tuanle99").toEqual(engineer_obj.getGithub());
  });
  it("should return the role of the engineer", () => {
    expect("Engineer").toEqual(engineer_obj.getRole());
  });
});
