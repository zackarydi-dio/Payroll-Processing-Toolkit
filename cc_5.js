const employees = [
  { name: "Brendan Doe", hourlyRate: 25, hoursWorked: 45 },
  { name: "Patrick Smith", hourlyRate: 30, hoursWorked: 38 },
  { name: "Austin Brown", hourlyRate: 28, hoursWorked: 42 },
  { name: "Zackary White", hourlyRate: 35, hoursWorked: 50 },
];

function calculateBasePay(rate, hours) {
  return hours <= 40 ? rate * hours : rate * 40;
}

function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    return (hours - 40) * rate * 1.5;
  }
  return 0;
}

function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxDeduction = calculateTaxes(grossPay);
  const netPay = grossPay - taxDeduction;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay,
  };
}

employees.forEach(employee => {
  const payroll = processPayroll(employee);
  console.log(payroll);
});
