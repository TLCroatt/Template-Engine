const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(firstName, lastName, email, officeNumber) {
        super(firstName, lastName, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;