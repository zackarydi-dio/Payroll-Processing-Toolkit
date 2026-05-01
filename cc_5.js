const STANDARD_HOURS = 40;
const OVERTIME_MULTIPLIER = 1.5;
const TAX_RATE = 0.15;

const employees = [
  { name: "Brendan Doe", hourlyRate: 25, hoursWorked: 45 },
  { name: "Patrick Smith", hourlyRate: 30, hoursWorked: 38 },
  { name: "Austin Brown", hourlyRate: 28, hoursWorked: 42 },
  { name: "Zackary White", hourlyRate: 35, hoursWorked: 50 },
];

function calculateBasePay(hourlyRate, hoursWorked) {
  const regularHours = Math.min(hoursWorked, STANDARD_HOURS);
  return regularHours * hourlyRate;
}

function calculateOvertimePay(hourlyRate, hoursWorked) {
  if (hoursWorked <= STANDARD_HOURS) {
    return 0;
  }

  const overtimeHours = hoursWorked - STANDARD_HOURS;
  return overtimeHours * hourlyRate * OVERTIME_MULTIPLIER;
}

function calculateTaxDeduction(grossPay) {
  return grossPay * TAX_RATE;
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function calculatePayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxAmount = calculateTaxDeduction(grossPay);
  const netPay = grossPay - taxAmount;

  return {
    name: employee.name,
    basePay,
    overtimePay,
    grossPay,
    taxAmount,
    netPay,
  };
}

function renderPayrollReport(employeeList) {
  const reportContainer = document.getElementById("payroll-report");
  if (!reportContainer) return;

  const table = document.createElement("table");
  table.className = "payroll-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Employee</th>
        <th>Base Pay</th>
        <th>Overtime Pay</th>
        <th>Gross Pay</th>
        <th>Tax</th>
        <th>Net Pay</th>
      </tr>
    </thead>
    <tbody>
      ${employeeList
        .map(employee => {
          const payroll = calculatePayroll(employee);
          return `
            <tr>
              <td>${payroll.name}</td>
              <td>${formatCurrency(payroll.basePay)}</td>
              <td>${formatCurrency(payroll.overtimePay)}</td>
              <td>${formatCurrency(payroll.grossPay)}</td>
              <td>${formatCurrency(payroll.taxAmount)}</td>
              <td>${formatCurrency(payroll.netPay)}</td>
            </tr>
          `;
        })
        .join("")}
    </tbody>
  `;

  reportContainer.appendChild(table);
}

function logPayrollSummary(employeeList) {
  employeeList.forEach(employee => {
    const payroll = calculatePayroll(employee);
    console.log(
      `${payroll.name}: gross ${formatCurrency(payroll.grossPay)}, net ${formatCurrency(payroll.netPay)}`
    );
  });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    renderPayrollReport(employees);
    logPayrollSummary(employees);
  });
} else {
  logPayrollSummary(employees);
}
