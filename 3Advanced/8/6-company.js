class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department){
        salary = Number(salary);
     let parametersArr = [name, salary, position, department];
     if(Number(salary) < 0 ){
         throw new Error("Invalid input!");
     }
     for(let parameter of parametersArr){
        
        if(parameter == null || parameter == "" || (typeof(parameter) == "undefined")){
            throw new Error("Invalid input!");  
        }

     }

     //-----------------

  if(!this.departments.hasOwnProperty(department)){
   this.departments[department] = [];
  }

    let newEmpolee ={
        name: name,
        salary: salary,
        position: position,
        department: department
    }
    this.departments[department].push(newEmpolee);
     return `New employee is hired. Name: ${name}. Position: ${position}`
}

bestDepartment(){
   let bestSalaryAvr = 0;
   let bestDepartmentArr;
   let bestDepartmentName;
   
    for(let depArr in this.departments){
        let salarySum = 0;
        let employeeCount = 0;
        for(let emplObj of this.departments[depArr]){
           salarySum += Number(emplObj.salary);
           employeeCount++;
        }
        
        if((salarySum/employeeCount)>bestSalaryAvr){
            bestSalaryAvr = salarySum/employeeCount;
            bestDepartmentArr = this.departments[depArr];
            bestDepartmentName = this.departments[depArr][0].department;
        }
    }
let output = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestSalaryAvr.toFixed(2)}\n`
//console.log(bestDepartmentArr);
bestDepartmentArr.sort((a,b) => Number(b.salary) - Number(a.salary) || a.name.localeCompare(b.name))
for(let emplObj of bestDepartmentArr){
output+= `${emplObj.name} ${emplObj.salary} ${emplObj.position}\n`;
}
    return output.trim();

}
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment()); 
//console.log(c.departments);


//console.log(c.departments.marketing[0]);