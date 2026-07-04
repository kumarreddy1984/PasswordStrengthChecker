# 🔐 SecurePass Checker

## Overview

SecurePass Checker is a simple web application that helps users check the strength of their passwords in real time. It analyzes the password based on length, uppercase letters, lowercase letters, numbers, and special characters. The application also provides suggestions to improve password security, detects commonly used weak passwords, and generates strong passwords.

This project is built using only **HTML, CSS, and JavaScript**, making it lightweight and easy to run in any modern web browser.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript

---

## Project Structure

```
SecurePassChecker/
│
├── index.html      # Main webpage
├── style.css       # Styling of the webpage
├── script.js       # Password strength logic
└── README.md
```

---

## File Description

### index.html

The `index.html` file is the main webpage of the application. It contains:

- Password input field
- Check Strength button
- Password Generator button
- Show/Hide password option
- Password strength display
- Suggestions section
- Responsive page structure

---

### style.css

The `style.css` file is responsible for the appearance of the application.

It includes:

- Page layout
- Colors
- Buttons
- Input box styling
- Password strength colors
- Responsive design
- Dark mode styling (if implemented)

---

### script.js

The `script.js` file contains the application logic.

Functions include:

- Checking password strength
- Calculating password score
- Detecting weak passwords
- Generating secure passwords
- Displaying suggestions
- Copying password to clipboard
- Show/Hide password functionality

---

## Features

- Real-time Password Strength Checker
- Weak, Medium, and Strong Password Detection
- Password Generator
- Password Suggestions
- Show/Hide Password
- Copy Password
- Responsive User Interface

---

## Password Strength Criteria

The password is evaluated based on the following rules:

| Criteria | Score |
|----------|-------|
| Length ≥ 8 characters | 1 |
| Contains Uppercase Letter | 1 |
| Contains Lowercase Letter | 1 |
| Contains Number | 1 |
| Contains Special Character | 1 |

### Strength Levels

- **Weak:** 0–2 points
- **Medium:** 3–4 points
- **Strong:** 5 points

---

## How to Run the Project

1. Download or clone the project.
2. Open the project folder.
3. Double-click **index.html** or open it using any web browser.
4. Enter a password.
5. View the password strength and suggestions instantly.

No installation or server is required.

---

## Browser Support

The project works on all modern browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Advantages

- Easy to use
- Lightweight
- Fast password analysis
- No installation required
- Beginner-friendly project
- Works completely in the browser

---

## Limitations

- Uses a sample list of weak passwords.
- No database connectivity.
- No user authentication.
- Does not store password history.

---

## Future Enhancements

- Integrate an online breached password database.
- Add AI-based password suggestions.
- Improve password generation algorithm.
- Add multi-language support.
- Develop a mobile application.

---

## Conclusion

SecurePass Checker is a simple and efficient web application that helps users create stronger and more secure passwords. It demonstrates the use of HTML, CSS, and JavaScript to build an interactive cybersecurity tool that promotes safe password practices.

---

## Author

**Project Name:** SecurePass Checker

**Technology:** HTML, CSS, JavaScript

**Domain:** Cybersecurity
