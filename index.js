// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
    
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  
  function hoursWorkedOnDate(employee, targetDate) {
    const timeIn = employee.timeInEvents.find(e => e.date === targetDate);
    const timeOut = employee.timeOutEvents.find(e => e.date === targetDate);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
  }
  
  function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
      return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((total, emp) => total + allWagesFor(emp), 0);
  }
  