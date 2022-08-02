let employee= [employeeID, fullName, department,
level, imageURL, salary];

function ID(employee){
    let counter = 0;
    employee.employeeID = counter +1000 ;
    counter++;
    return employee;
}
function salaryGenerator(employee){
    if(employee.level === "Senior"){
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }else if(employee.level === "Mid-Senior"){
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }else(employee.level === "Junior");{
        let min = 500;
        let max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
console.log(employee.fullName+ " " + employee.salary)
