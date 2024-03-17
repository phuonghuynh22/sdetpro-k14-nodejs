class Employee {

    // lap trinh huong doi tuong
    constructor(salary) {
        this._validateSalary(salary);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._validateSalary(salary);
        this._salary = salary;
    }


    // Support method: su dung ben trong file
    _validateSalary(salary){
        if(salary <= 0){
            throw new Error('Salary must be >= 0')
        }
    }

    // Service method: nen tach ra file khac ben ngoai

}

module.exports = Employee;