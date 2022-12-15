// 2D Arrays

// how to get values in nested arrays.

const emp1 = ['subbu', 'hari', 'venky']
const emp2 = ['ramya', 'geetha', 'sravani']

const student1 = ['pavan', 'kalayn', 'pk']
const student2 = ['sai', 'vamsi', 'anand']

const students = [emp1, emp2]
                  //0     1  
const employees = [student1, student2]
                   // 0          1

console.log(students[0][1])
console.log(employees[1][0])
console.log(employees[0][2])

const store=[students, employees]
console.log(store)
