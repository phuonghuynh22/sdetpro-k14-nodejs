class SalaryController { // ko huong doi tuong, chi huong ham  `

    // phuong thuc binh thuong, ko phai getter/setter
    // ko can co chu function phia truoc. No tu hieu
    //functional programming
    getTotalSalary(employees) { // employees chi la quy uoc, khong co define cu the loai gi
        let totalSalary = 0;

        //nhan vao value index array
        employees.forEach(function (employee) {
            totalSalary = totalSalary + employee.salary; // dang goi setter, chu khong phai dang goi property
            // totalSalary += employee.salary; // cach viet khac, tuong duong o tren
        });

        return totalSalary;
    }

}
module.exports = SalaryController;