class Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseSalary = baseSalary;
        this.experience = experience;
    }

    countedSalary() {
        let salary = this.baseSalary;
        if (this.experience > 5) {
            salary = this.baseSalary * 1.2 + 500;
        } else if (this.experience > 2) {
            salary = this.baseSalary + 200;
        }
        return salary;
    }
}

class Developer extends Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        super(firstName, lastName, baseSalary, experience);
    }
}

class Designer extends Employee {
    constructor(firstName, lastName, baseSalary, experience, efficiencyCoefficient) {
        super(firstName, lastName, baseSalary, experience);
        this.efficiencyCoefficient = efficiencyCoefficient;
    }

    countedSalary() {
        return super.countedSalary() * this.efficiencyCoefficient;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, baseSalary, experience, team) {
        super(firstName, lastName, baseSalary, experience);
        this.team = team;
    }

    countedSalary() {
        let salary = super.countedSalary();
        if (this.team.length > 10) {
            salary += 300;
        } else if (this.team.length > 5) {
            salary += 200;
        }
        const developerCount = this.team.filter(member => member instanceof Developer).length;
        const designerCount = this.team.filter(member => member instanceof Designer).length;
        const halfDeveloper = developerCount > this.team.length / 2;
        if (halfDeveloper) {
            salary *= 1.1;
        }
        return salary;
    }
}
class Department {
    constructor(managers) {
        this.managers = managers;
    }

    giveSalary() {
        for (const manager of this.managers) {
            const teamSalary = manager.team.reduce((acc, member) => acc + member.countedSalary(), 0);
            const managerSalary = manager.countedSalary() + teamSalary;
            console.log(`${manager.firstName} ${manager.lastName} отримав ${managerSalary} шекелів.`);
            for (const member of manager.team) {
                console.log(`${member.firstName} ${member.lastName} отримав ${member.countedSalary()} шекелів.`);
            }
        }
    }
}
const developer1 = new Developer('John', 'Doe', 3000, 4);
const developer2 = new Developer('Jane', 'Smith', 4000, 6);
const designer1 = new Designer('Mike', 'Johnson', 3500, 3, 0.8);
const designer2 = new Designer('Emily', 'Brown', 3800, 7, 0.9);
const manager1 = new Manager('David', 'Williams', 5000, 8, [developer1, developer2]);
const manager2 = new Manager('Olivia', 'Jones', 5500, 9, [designer1, designer2]);

const department = new Department([manager1, manager2]);
department.giveSalary();
