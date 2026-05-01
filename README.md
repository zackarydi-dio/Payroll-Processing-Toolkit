# Payroll Processing Toolkit

A polished JavaScript payroll calculator that computes hourly pay, overtime, tax deductions, and final net pay for a small set of employees. This project is designed to be clean, maintainable, and presentation-ready for interview review.

## Project Summary

This repository demonstrates a payroll workflow for hourly employees. The application:

- calculates standard base pay for up to 40 hours
- computes overtime pay at 1.5x for hours beyond 40
- applies a flat tax deduction of 15%
- renders a clean payroll summary table in the browser
- prints a concise payroll summary to the console

## Technologies Used

- HTML
- JavaScript
- browser DOM API

## How to Run

### In a browser

1. Open `index.html` in your browser.
2. The payroll summary table is generated automatically.

### With Node.js

1. Install Node.js if needed.
2. Run:

```bash
node cc_5.js
```

3. Review the payroll output in the terminal.

## What I Learned

- how to structure JavaScript code into reusable functions
- how to separate calculation logic from presentation
- how to render dynamic data into the browser DOM
- how to clean up code and documentation for a portfolio-ready repo

## File Structure

- `cc_5.js` — payroll logic, formatting, and report rendering
- `index.html` — browser interface and script loader
- `README.md` — project overview, usage, and notes

## Notes

This project uses a simplified tax model for demonstration purposes. The code is intentionally modular and ready for enhancements such as employee input forms, configurable tax rates, or payroll export features.
