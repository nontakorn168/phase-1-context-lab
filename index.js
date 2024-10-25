// /* Your Code Here */

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

// // Function to create a single employee record from an array
// function createEmployeeRecord(arr) {
//     return {
//         firstName: arr[0],
//         familyName: arr[1],
//         title: arr[2],
//         payPerHour: arr[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     };
// }

// // Function to convert an array of employee arrays into an array of employee records
// function createEmployeeRecords(arrays) {
//     return arrays.map(createEmployeeRecord);
// }
// // Function to add a TimeIn event to emp's rec
// function createTimeInEvent(employee, dateStamp) {
//     // Ensure dateStamp is string
//     if (typeof dateStamp !== "string") {
//         throw new Error("Invalid dateStamp provided to createTimeInEvent");
//     }
//  // Split the dateStamp into a date and hour (format: "YYYY-MM-DD HHMM")
//     const [date, hour] = dateStamp.split(" ");

//     // Create the timeIn event and push it to the timeInEvents array
//     employee.timeInEvents.push({
//         type: "TimeIn",       
//         hour: parseInt(hour), 
//         date: date            
//     });

//     // อัพเดทบัตร
//     return employee;
// }


// // Function to add a TimeOut event to an employee's record
// function createTimeOutEvent(employee, dateStamp) {
//     if (typeof dateStamp !== "string") {
//         throw new Error("Invalid dateStamp provided to createTimeOutEvent");
//     }
    
//     const [date, hour] = dateStamp.split(" ");
//     employee.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date: date
//     });
//     return employee;
// }

// // Function to calculate the hours worked by an employee on a given date
// function hoursWorkedOnDate(employee, date) {
//     const timeIn = employee.timeInEvents.find(event => event.date === date);
//     const timeOut = employee.timeOutEvents.find(event => event.date === date);
//     return (timeOut.hour - timeIn.hour) / 100;
// }

// // Function to calculate the wages earned by an employee on a given date
// function wagesEarnedOnDate(employee, date) {
//     const hours = hoursWorkedOnDate(employee, date);
//     return hours * employee.payPerHour;
// }

// // Function to calculate the total wages for all dates worked by an employee
// const allWagesFor = function() {
//     const eligibleDates = this.timeInEvents.map(event => event.date);
//     return eligibleDates.reduce((total, date) => total + wagesEarnedOnDate(this, date), 0);
// };

// // Function to find an employee by their first name
// function findEmployeeByFirstName(srcArray, firstName) {
//     return srcArray.find(employee => employee.firstName === firstName);
// }

// // Function to calculate the total payroll for all employees
// function calculatePayroll(employees) {
//     return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
// }

// // Example Usage:
// const employees = [
//     ["Gray", "Worm", "Security", 1],
//     ["John", "Doe", "Developer", 50]
// ];

// // Create employee records
// const employeeRecords = createEmployeeRecords(employees);

// // Add timeIn and timeOut events
// createTimeInEvent(employeeRecords[0], "2024-09-14 0900");
// createTimeOutEvent(employeeRecords[0], "2024-09-14 1700");

// createTimeInEvent(employeeRecords[1], "2024-09-14 1000");
// createTimeOutEvent(employeeRecords[1], "2024-09-14 1800");

// // Calculate total payroll
// console.log(calculatePayroll(employeeRecords)); // Output: total payroll amount


function createEmployeeRecord(arr) {
    // ตรวจสอบ firstName, familyName และ title เป็น string
    if (typeof arr[0] !== 'string' || typeof arr[1] !== 'string' || typeof arr[2] !== 'string') {
        throw new Error("First name, family name, and title must be strings.");
    }

    // ตรวจสอบ payPerHour เป็น number
    if (typeof arr[3] !== 'number') {
        throw new Error("Pay per hour must be a number.");
    }

    return {
        firstName: arr[0],        // First name ต้องเป็น string
        familyName: arr[1],       // Family name ต้องเป็น string
        title: arr[2],            // Title ต้องเป็น string
        payPerHour: arr[3],       // Pay per hour ต้องเป็น number
        timeInEvents: [],         // เริ่มต้น array ของ timeInEvents เป็นค่าว่าง
        timeOutEvents: []         // เริ่มต้น array ของ timeOutEvents เป็นค่าว่าง
    };
}
  
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
};
  
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),  // แปลงเป็นเลขจำนวนเต็ม
        date: date                 // บันทึกวันที่ในฟิลด์ date
    });

    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),  // แปลงเป็นเลขจำนวนเต็ม
        date: date                 // บันทึกวันที่ในฟิลด์ date
    });

    return this;
}

  
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    if (!timeIn || !timeOut) {
        throw new Error(`No matching timeIn or timeOut event found for date: ${date}`);
    }

    // คำนวณชั่วโมงทำงาน
    return (timeOut.hour - timeIn.hour) / 100;
}


  
function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);  // คำนวณชั่วโมงทำงาน
    return hours * this.payPerHour;  // คืนค่าเงินที่ได้
}

  
const allWagesFor = function() {
    if (!this.timeInEvents || !this.timeOutEvents) {
        throw new Error("Employee record is missing time events");
    }

    const eligibleDates = this.timeInEvents.map(event => event.date);
    return eligibleDates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
};
  
  function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(employee => employee.firstName === firstName);
  }
  
function calculatePayroll(employees) {
    // ตรวจสอบว่าพนักงานถูก ส่งเข้ามาเป็นอาเรย์
    if (!Array.isArray(employees)) {
        throw new TypeError("Expected an array of employees");
    }

    // ใช้ reduce เพื่อคำนวณเงินเดือนรวมของพนักงานทั้งหมด
    return employees.reduce((totalPayroll, employee) => {
        // ตรวจสอบว่าพนักงานแต่ละคนมีข้อมูลที่ถูกต้อง
        if (!employee.timeInEvents || !employee.timeOutEvents) {
            throw new Error("Employee record is missing time events");
        }
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
}

const employee = createEmployeeRecord(["John", "Doe", "Developer", 50]);

// 2. เพิ่มเวลาเข้างานและออกงานในวันที่ 2024-09-14
createTimeInEvent.call(employee, "2024-09-14 0900"); // เพิ่มเวลาเข้า
createTimeOutEvent.call(employee, "2024-09-14 1700"); // เพิ่มเวลาออก

// 3. ตรวจสอบว่าข้อมูล timeInEvents และ timeOutEvents ถูกเพิ่มสำเร็จ
console.log(employee.timeInEvents);  // ควรเห็นข้อมูลเวลาเข้าในอาเรย์นี้
console.log(employee.timeOutEvents); // ควรเห็นข้อมูลเวลาออกในอาเรย์นี้

// 4. คำนวณชั่วโมงทำงานในวันที่ 2024-09-14
const hoursWorked = hoursWorkedOnDate(employee, "2024-09-14");
console.log(`ชั่วโมงที่ทำงาน: ${hoursWorked} ชั่วโมง`);  // ควรแสดงผลลัพธ์: 8 ชั่วโมง

// 5. คำนวณค่าจ้างที่ได้รับในวันที่ 2024-09-14
const wagesEarned = wagesEarnedOnDate(employee, "2024-09-14");
console.log(`ค่าจ้างที่ได้รับ: $${wagesEarned}`);