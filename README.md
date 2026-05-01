# Payroll Processing Toolkit

A lightweight JavaScript project that automates common payroll calculations for hourly employees. This solution computes base pay, overtime pay, gross pay, tax deductions, and net pay using a clear and maintainable function-based implementation.

## Overview

This repository demonstrates a payroll processing workflow for a small set of employees. It includes:

- Hourly pay calculations for standard and overtime hours
- Overtime pay at 1.5x the normal hourly rate for hours beyond 40
- Simple tax deduction modeling at a fixed 15% rate
- Aggregated gross pay and net pay output for each employee

## Features

- Modular payroll functions in `cc_5.js`
- Example employee data with variable hours and rates
- Browser-ready demonstration via `index.html`
- Console output for payroll reports

## Usage

### Open in a browser

1. Open `index.html` in a web browser.
2. View the payroll output in the browser console.

### Run with Node.js

If Node.js is installed, run:

```bash
node cc_5.js
```

The script prints payroll details for each employee to the terminal.

## File Structure

- `cc_5.js` — core payroll calculation logic and sample employee data
- `index.html` — simple page that loads the script for browser execution
- `README.md` — project documentation

## Notes

- The tax deduction is modeled as a flat 15% of gross pay for demonstration purposes.
- This project is intended as a learning exercise in JavaScript function design and payroll computation.

## License

No license specified.
