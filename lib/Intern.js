const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(firstName, lastName, email, school) {
        super(firstName, lastName, email);
        this.school = school;
    }
}

module.exports = Intern;