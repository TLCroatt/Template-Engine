const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(firstName, id, email, github) {
        super(firstName, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    };

    getGithub() {
        return this.github;
    };
}


module.exports = Engineer;