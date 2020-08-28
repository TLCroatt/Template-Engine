const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(firstName, lastName, email, gitHub) {
        super(firstName, lastName, email);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;