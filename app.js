var counter = 0;

function Employee(fullName, department, level, img){
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.employeeID = IDGenerator();
    this.salary = salaryGenerator(level)
}

const employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "./ghazi.jpg");
const employee2 = new Employee("Lana Ali", "Finance", "Senior", "./lana.jpg");
const employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "./tamara.jpg");
const employee4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "./safi.jpg");
const employee5 = new Employee("Omar Zaid", "Development", "Senior", "./omar.jpg");
const employee6 = new Employee("Rana Saleh", "Development", "Junior", "./rana.jpg");
const employee7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./hadi.jpg");

console.log("Employee name: " + employee1.fullName + "\n" + "Employee salary: " + employee1.salary);
console.log("Employee name: " + employee2.fullName + "\n" + "Employee salary: " + employee2.salary);
console.log("Employee name: " + employee3.fullName + "\n" + "Employee salary: " + employee3.salary);
console.log("Employee name: " + employee4.fullName + "\n" + "Employee salary: " + employee4.salary);
console.log("Employee name: " + employee5.fullName + "\n" + "Employee salary: " + employee5.salary);
console.log("Employee name: " + employee6.fullName + "\n" + "Employee salary: " + employee6.salary);
console.log("Employee name: " + employee7.fullName + "\n" + "Employee salary: " + employee7.salary);

function IDGenerator(){
    return counter++ ;
}
function salaryGenerator(level){
    if(level === "Senior"){
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }else if(level === "Mid-Senior"){
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }else(level === "Junior");{
        let min = 500;
        let max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

